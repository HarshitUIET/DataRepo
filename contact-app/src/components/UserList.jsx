import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { users } from '../contacts'
import { useNavigate } from 'react-router-dom'

const UserList = ({selectedUser,setSelectedUser}) => {

    const navigate = useNavigate();

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        navigate(`/contact/${user.id}`);
    };

    return (
        <div className='flex flex-col h-full max-h-full overflow-auto'>
            {
                users.map((user,index) => (
                        <Card 
                        key={index}
                        user={user}
                        isSelected={selectedUser?.id === user.id}
                        onSelectUser={() => handleSelectUser(user)}
                         />
                ))
            }
        </div>
    )
}

export default UserList