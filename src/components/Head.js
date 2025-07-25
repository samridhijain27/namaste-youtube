import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={toggleMenuHandler}
          className='h-8 cursor-pointer'
          alt='menu'
          src='https://as1.ftcdn.net/jpg/02/24/13/60/1000_F_224136032_b11na6zJLTpORSjfauRdpKamQDc7Uejv.jpg'
        />
        <a href='/'></a>
        <img
          className='h-8 mx-2'
          alt='logo'
          src='https://pngdownload.io/wp-content/uploads/2024/03/YouTube-logo-video-platform-social-media-transparent-PNG-image-jpg.webp'
        />
      </div>
      <div className='col-span-10 px-10'>
        <input
          type='text'
          className='w-1/2 border border-gray-400 p-2 rounded-l-full'
        ></input>
        <button className='border border-gray-400 rounded-r-full py-2 px-5 bg-gray-100'>
          🔍
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user'
          src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'
        />
      </div>
    </div>
  );
};

export default Head;
