import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { users } from '../contacts'

const UserList = ({selectedUser,setSelectedUser}) => {

    

    const handleSelectUser = (user) => {
        console.log("Calling handleSelectUser", user);  
        setSelectedUser(user);
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