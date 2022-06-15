import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='footer  w-full h-[100px] grid grid-cols-3 items-center bg-black '>
        <h3 className='text-white'>Location</h3>
        <div className="footer-location"></div>
        <h3 className='text-white'>Social Media</h3>
        <div className='footer-social'></div>
        <h3 className='text-white'>About</h3>
        <div className='footer-about'></div>
      </div>
    </div>
  )
}
