import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      
   


      <div className='md:flex lg:flex-row items-center md:ml-4 md:mr-4'>
        <div className='md:flex md:flex-col md:justify-center md:object-center text-center md:items-center'>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

     
<p className=' font-bold text-3xl md:mb-2 mt-4 border-b-2 border-black p-1'> renderBound.com </p>
<p className=' font-bold text-lg md:mb-2'> 
Podcast, Blog, Animation, and More!</p>

  {/* MAIN HEADING MENU   */}
  <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6 mt-4 w-[80vw]'>
             {/* Menu item */}
             <p> <Link to="/mated" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-500'><span>
        <img src="https://yt3.googleusercontent.com/HPS0ZKjY6-sEZL24u0xc7mAAhsxru1DH02s8lyzgcV1cjO4bJzH287sharXPS-YtUJ0HwYbdKw=s900-c-k-c0x00ffffff-no-rj"
        className=' border-black border-2 md:w-40 md:h-40 w-32 h-32 object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="Linkedin"></img></span></Link></p>
         {/* Menu item End */}
         {/* Menu item */}
         <p> <Link to="/blog" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-500'><span>
      
        <img src="https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_1280.jpg"
        className=' border-black border-2 md:w-40 md:h-40 w-32 h-32 object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="Linkedin"></img></span></Link></p>
         {/* Menu item End */}
        </div>
        

<p className='border-black border-2  border-t-4 p-4 mt-2 md:m-4 md:mb-4 rounded-lg w-full md:w-[75%] bg-orange-200'>
WELCOME
<br />
Thank you for stopping by, this website is UNDER CONSTRUCTION.
<br /><br />

 </p>
</div>


<div className=' m-2 flex justify-center items-center'>

</div>

</div>

<div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6 mt-4 w-[60vw]'>
      {/* Social media */}
      <a href="https://www.linkedin.com/in/eric-polley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="Linkedin"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://twitter.com/ericrpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="twitter"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://youtube.com/erpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://www.facebook.com/eric.r.polley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://www.instagram.com/erpolley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-orange-500 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}

</div>

    </div>
  )
}
