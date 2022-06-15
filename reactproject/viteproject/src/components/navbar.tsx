import React from 'react'
interface navİnfo{
   job: string,
   travel:string,
   edu:string,
   personDev:string
}
export default function Navbar(props:navİnfo) {
  return (
    <div>
    <div className='nav w-full h-[80px] grid grid-cols-2 items-center bg-black '>
    <div className="nav-logo text-white text-5xl">
    <i className="fa-brands fa-react"></i>
    </div>
      <div className='nav-links '>
        <ul className='flex flex-row justify-around'>
            <li className='text-white border-b-2 border-white-500'>{props.job}</li>
            <li className='text-white border-b-2 border-white-500'>{props.travel}</li>
            <li className='text-white border-b-2 border-white-500'>{props.edu}</li>
            <li className='text-white border-b-2 border-white-500'>{props.personDev}</li>
        </ul>
    </div>
      </div>
    </div>
  )
}
