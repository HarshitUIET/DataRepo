import React from 'react';

const Card = ({ user, isSelected, onSelectUser }) => {

  return (
    <div 
      className={`text-black rounded-sm h-[100px]`} 
      onClick={onSelectUser} 
    >
      <div className={`flex justify-between hover:bg-gray-300 cursor-pointer w-full px-4 py-4 rounded-sm ${isSelected ? "bg-gray-200" : ""}`}>
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-2xl">
            {user.name}
          </div>
          <div>
            {user.Phone}
          </div>
        </div>
        <div>
          <img src={user.url} alt={user.name} className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
