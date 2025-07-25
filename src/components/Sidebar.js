import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li> Videos</li>
        <li> Live </li>
      </ul>
      <h2 className='font-bold'>Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h2 className='font-bold'>Watch Later</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
