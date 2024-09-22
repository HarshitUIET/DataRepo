import React from 'react';

const OtpCard = ({user}) => {
  return (
    <div 
      className={`text-black rounded-sm h-[120px]`}  
    >
      <div className={`flex justify-between hover:bg-gray-300 cursor-pointer w-full px-4 py-4 rounded-sm `}>
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-2xl">
            {user.userName}
          </div>
          <div>
            OTP Sent : {user.otp}
          </div>
          <div>
            Time : {user.time}
          </div>
        </div>
        <div>
          <img src={user.url} alt={user.name} className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default OtpCard;
