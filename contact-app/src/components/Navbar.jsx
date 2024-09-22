import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="text-sm bg-black h-full w-full ">
      <div className="h-full border-b shadow-lg">
        <div className="flex justify-between items-center h-full w-full px-4 sm:px-8">
          <div className="font-bold font-serif text-2xl text-white">
            <div className="flex sm:px-6">
              <button className=" mr-2 sm:hidden">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon fontSize='large' />}
              </button>
              <span className="ml-1 hidden sm:block">Data Taskers</span>
            </div>
          </div>
          <div className='flex justify-end sm:justify-between gap-x-4 px-4 py-2'>
            <div className='rounded-md font-bold text-white cursor-pointer hover:bg-white hover:text-black border py-2 px-2'>
              <Link to='/'>Contact List</Link>
            </div>
            <div className='rounded-md font-bold hover:bg-white cursor-pointer hover:text-black text-white border py-2 px-4' >
              <Link to='/contact/message'>Messages</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar