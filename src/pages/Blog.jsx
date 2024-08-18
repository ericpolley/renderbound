import { useNavigate } from "react-router";
import Blog001 from "./Blogs/Blog001";
import Blog002 from "./Blogs/Blog002";




export default function Blog() {
  const navigate = useNavigate();
  return (
    <div>
      
      
      <div className='w-full text-center'>
     <h1 className='text-2xl font-medium  '>Blog</h1>


     
     <div className='flex flex-row flex-wrap justify-center'>
      
                 {/* CARD */}
                 <div onClick={()=>navigate('/blog/002')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col justify-center items-center bg-orange-400 rounded-xl border-orange-700'>
          
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 overflow-hidden mt-2 text-sm">
            <Blog002 /></div>
          <div className='mb-2 mt-2'>
          <p className='focus:text-orange-400 text-orange-700 hover:text-orange-300 m-4 text-sm'>Click to read more </p>

          </div></div> 
        {/*Card end*/}

                             {/* CARD */}
                             <div onClick={()=>navigate('/blog/001')}
      className='cursor-pointer lg:w-[29%] w-full shadow-xl border-4 m-4 flex flex-col justify-center items-center bg-orange-400 rounded-xl border-orange-700'>
          
         <div 
          className="shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-700 hover:text-black text-orange-700 bg-orange-300 overflow-hidden mt-2 text-sm"><Blog001 /></div>
          <div className='mb-2 mt-2'>
          <p className='focus:text-orange-400 text-orange-700 hover:text-orange-300 m-4 text-sm'>Click to read more </p>

          </div></div> 
        {/*Card end*/}

        </div>
    </div>
    </div>
  )
}
