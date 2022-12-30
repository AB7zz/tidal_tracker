import * as React from 'react';
import wallpaper from './wallpaper.png'
import TopNav from '../TopNavbar/TopNav';

function Preloader(){
  return (
    <>
      {/* <TopNav/> */}
      <img className='h-auto' src={wallpaper} alt="wallpaper" />
    </>
  );
}
export default Preloader