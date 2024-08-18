import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

import Mated001 from "./Podcasts/mated001";
import Mated002 from './Podcasts/mated002';
import Mated003 from './Podcasts/mated003';
import Mated004 from './Podcasts/mated004';
import Mated005 from './Podcasts/mated005';

export default function Mated() {
  const navigate = useNavigate();
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>PODCAST:</h1>

      <div className='w-full text-center'>
     <h1 className='text-2xl font-medium  '>Mated Podcast</h1>


     
     <div className='flex flex-row flex-wrap justify-center'>

{/* CARD */}
<div onClick={()=>navigate('/mated/005')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-orange-400 rounded-xl border-orange-700'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 
          overflow-hidden mt-2 text-sm">
            <Mated005 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}

        {/* CARD */}
<div onClick={()=>navigate('/mated/004')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-orange-400 rounded-xl border-orange-700'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 
          overflow-hidden mt-2 text-sm">
            <Mated004 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}

{/* CARD */}
<div onClick={()=>navigate('/mated/003')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-orange-400 rounded-xl border-orange-700'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 
          overflow-hidden mt-2 text-sm">
            <Mated003 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}


{/* CARD */}
<div onClick={()=>navigate('/mated/002')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-orange-400 rounded-xl border-orange-700'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 
          overflow-hidden mt-2 text-sm">
            <Mated002 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}

      {/* CARD */}
<div onClick={()=>navigate('/mated/001')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-orange-400 rounded-xl border-orange-700'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 
          overflow-hidden mt-2 text-sm">
            <Mated001 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}


    </div>



      

      </div>


    </div>
  )
}
