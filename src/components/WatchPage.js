import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
// Read video id from url and displays data
const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('v'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className='px-5'>
      <iframe
        title='Youtube Player'
        width={1200}
        height={600}
        allowFullScreen
        frameBorder={0}
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
      ></iframe>
    </div>
  );
};

export default WatchPage;
