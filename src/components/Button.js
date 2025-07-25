import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className='px-5 m-2 py-2 bg-gray-200 shadow-gray-50 rounded-lg'>
        {name}
      </button>
    </div>
  );
};

export default Button;
