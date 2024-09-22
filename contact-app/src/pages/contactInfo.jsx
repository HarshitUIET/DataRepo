import { Button } from '@mui/material'
import React from 'react'
import { users } from '../contacts'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ContactInfo = ({selectedUser,setSelectedUser}) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = (id) => { 
    return users.find(user => user.id === parseInt(id));
  }

  const handleMessageClick = () => {
    navigate(`/contact/${id}/otp`);
  }

  useEffect(()=>{
    setSelectedUser(getUser(id));
  },[id])

  return (
    <div className='h-screen w-[100vw] bg-gray-400'>
        <div className='flex justify-center items-center bg-gray-500 h-full w-full font-bold text-2xl'>
            <div className='bg-white h-[84vh] md:h-[65vh] px-4 space-y-4 flex-col rounded-md shadow-sm flex py-4'>
                <div className='flex justify-center w-full text-3xl mt-4 font-bold'>Contact Info</div>
                <div className='flex flex-col space-y-8 md:space-y-12 py-4'>
                   <div className=' flex flex-col  space-y-2 md:flex-row md:justify-center md:w-full md:space-x-2  md:px-0 px-4'>
                      <div className='py-4 px-4'>Contact Name :</div>
                      <div className='border rounded-lg bg-blue-600 text-white py-4 px-4'>{selectedUser?.name }</div>
                   </div>
                   <div className='flex flex-col space-y-2 md:flex-row md:justify-center md:w-full md:space-x-2  md:px-0 px-4'>
                      <span className='py-4 px-4'>Contact Number :</span>
                      <div className='border rounded-lg bg-blue-600 text-white py-4 px-4'>{selectedUser?.Phone }</div>
                   </div>
                   <div className='flex justify-center w-full space-x-2 '>
                   <Button onClick={handleMessageClick} variant='contained' color='primary' className='md:w-[180px] h-16'>Send Message</Button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo