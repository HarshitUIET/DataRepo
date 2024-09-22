import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import OtpCard from '../components/OtpCard';
import { useNavigate } from 'react-router-dom';

const NewMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://datarepo.onrender.com/get-otps`);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const convertToIST = (utcTime) => {
    const date = new Date(utcTime);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className='h-full'>
      <div className='h-[4rem]'>
        <Navbar />
      </div>
      <div
        style={{
          height: 'calc(100vh - 4rem)',
        }}
      >
        <div className='flex h-full'>
          <div className='h-full max-h-screen w-full md:w-[40vw] bg-white overflow-y-auto'>
            {
              messages.map((user, index) => (
                <OtpCard
                  key={index}
                  user={{
                    otp: user.otp,
                    time: convertToIST(user.sentAt), 
                    userName: user.name,
                    url: user.url,
                  }}
                />
              ))
            }
          </div>
          <div className=' hidden md:block w-full h-[90vh] bg-white'>
            <div className='justify-center items-center flex font-bold first-letter:capitalize text-3xl h-full w-full'>
              OTP Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
