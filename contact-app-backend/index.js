const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


const otpSchema = new mongoose.Schema({
    name: String,
    otp: String,
    sentAt: { type: Date, default: Date.now },
});

const OtpRecord = mongoose.model('OtpRecord', otpSchema,'OTP');

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/send-otp/twilio', async (req, res) => {
    const { name, phoneNumber, otp } = req.body;

    try {
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber,
        });

        const otpRecord = new OtpRecord({ name, otp });
        await otpRecord.save();

        res.json({ message: 'OTP sent successfully via Twilio', sid: message.sid });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send OTP via Twilio or save record' });
    }
});

app.get('/get-otps', async (req, res) => {
    try {
        const otps = await OtpRecord.find().sort({ sentAt: -1 }); 
        res.json(otps);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve OTP records' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
