import React from 'react';
import { Button, TextField } from '@mui/material';
import { users } from '../contacts';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Otp = () => {
  const random6Digit = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

 
  console.log(process.env.REACT_APP_BACKEND_URL);

  const [otp, setOtp] = useState(random6Digit());

  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = users.find((user) => user.id === parseInt(id));

  const handleOtpClick = () => {
    axios
      .post(`https://datarepo.onrender.com/send-otp/twilio`, {
        name: selectedUser.name,
        phoneNumber: selectedUser.Phone,
        otp,
        url:selectedUser.url
      })
      .then((res) => {
        console.log(res.data);
        toast.success("OTP sent successfully to " + selectedUser.name);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send OTP to " + selectedUser.name);
      });
  };

  return (
    <div className="h-screen w-[100vw] bg-gray-400">
      <div className="flex justify-center items-center bg-gray-500 h-full w-full font-bold text-2xl">
        <div className="bg-white h-[45vh] w-[80vw] md:w-[40vw] space-y-4 flex-col rounded-md shadow-sm flex py-4">
          <div className="flex justify-center w-full text-3xl mt-4 font-bold">OTP Details</div>
          <div className="flex flex-col space-y-12 py-4">
            <div className="flex justify-center w-full px-6 space-x-2">
              <TextField
                label={`OTP`}
                value={`Hi ${selectedUser.name}, your OTP is ${otp}`}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </div>
            <div className="flex justify-center w-full space-x-2 mb-4 md:mb-0">
              <Button onClick={handleOtpClick} variant="contained" color="primary" className="w-1/2 h-16">
                Send OTP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
