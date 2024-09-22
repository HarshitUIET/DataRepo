import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

const ContactList = ({selectedUser,setSelectedUser}) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Navigate only when selectedUser exists and has a valid id
  //   if (selectedUser && selectedUser.id) {
  //     navigate(`/contact/${selectedUser.id}`);
  //   }
  // }, [selectedUser, navigate]);

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
          <div className='h-full max-h-screen w-full md:w-[40vw] bg-white'>
            <UserList
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </div>
          <div className='hidden md:block w-full h-[90vh] bg-white'>
            <div className='justify-center items-center flex font-bold first-letter:capitalize text-3xl h-full w-full'>
              Select a contact to view info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
