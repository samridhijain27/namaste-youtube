import React from 'react';
import Button from './Button';
const buttonList = [
  'All',
  'Soccer',
  'Gaming',
  'Cooking',
  'Lo-fi',
  'Guitar',
  'Cricket',
  'Music',
  'Makeup',
  'Coding',
];

const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonList.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
