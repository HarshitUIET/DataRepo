import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-sm bg-black h-full w-full ">
      <div className="h-full border-b shadow-lg">
        <div className="flex justify-between items-center h-full w-full px-4 sm:px-8">
          <div className="font-bold font-serif text-2xl text-white">
            <div className="flex sm:px-6">
              <button className="mr-2 sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon fontSize='large' />}
              </button>
              <span className="ml-1 hidden sm:block">Data Taskers</span>
            </div>
          </div>
          <div className='flex justify-end sm:justify-between gap-x-4 px-4 py-2'>
            <Link to='/' className='rounded-md font-bold text-white cursor-pointer hover:bg-white hover:text-black border py-2 px-2'>
              Contact List
            </Link>

            <Link to='/contact/message' className='rounded-md font-bold hover:bg-white cursor-pointer hover:text-black text-white border py-2 px-4'>
              Messages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
