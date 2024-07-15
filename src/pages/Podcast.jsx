import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

import Mated001 from "./Podcasts/mated001";

export default function Podcast() {
  const navigate = useNavigate();
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>PODCAST</h1>

      <div className='w-full text-center'>
     <h1 className='text-2xl font-medium  '>renderBound Podcast</h1>


     
     <div className='flex flex-row flex-wrap justify-center'>
      {/* CARD */}
<div onClick={()=>navigate('/Podcasts/001')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col 
      justify-center items-center bg-slate-400 rounded-xl border-slate-500'> 
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-slate-500 hover:text-black text-slate-700 bg-slate-300 
          overflow-hidden mt-2 text-sm">
            <Mated001 /></div>
          <div className='mb-2 mt-2'>
          <Link to="/podcast" className=' mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300'>Click to read more </Link>
          </div></div> 
        {/*Card end*/}


    </div>



      

      </div>


    </div>
  )
}
