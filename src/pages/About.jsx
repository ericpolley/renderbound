import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium '>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center '>
        <p className='text-lg font-medium mb-6'>About Eric Polley</p>
        <p className='s:ml-4 s:mr-4 md:ml-24 md:mr-24 '>
        Welcome to my creative corner! I’m a passionate video editor and videographer with a strong foundation in animation and a talent for capturing the perfect shot. Proficient in Adobe Premiere Pro, After Effects, and Blender, I blend technical skill with artistic vision to create visually captivating and compelling videos.
        <br /><br />
In my current role, I've honed my videography and editing skills, ensuring that each project is both visually stunning and narratively engaging. My background in animation allows me to incorporate dynamic visual effects that enhance the overall storytelling experience.
<br />
Outside of my professional life, I have a diverse range of hobbies that keep me inspired and energized. I enjoy flying drones, offering a fresh perspective to my videography. 
<br /><br />
Music is another passion; I play the drums, piano, and guitar. 
<br />
When I’m not behind the camera or making music, you might find me kayaking, 3D printing, or spending quality time with my family. Whether it’s BBQs, video games, or card games, family time is my favorite way to unwind and stay grounded.
<br /><br />




        </p>

        <Link to="/contact" className=' '>
<div className='m-8 mb-16 p-2 bg-red-500 text-white hover:text-black hover:border-gray-600 hover:bg-red-300 border-black rounded-xl border-4 text-xl w-[40vw]'>
  <p>Contact for a quote</p>
</div>
</Link>

        <div className='flex flex-col flex-wrap'>
      <p className='m-6 text-xl'>Eric Polley</p>

      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6'>
      {/* Social media */}
      <a href="https://www.linkedin.com/in/eric-polley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="Linkedin"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://twitter.com/ericrpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="twitter"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://youtube.com/erpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://www.facebook.com/eric.r.polley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://www.instagram.com/erpolley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}

</div>
      <a href="mailto:ericpolley@live.com" target="_blank" rel="noreferrer" className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-2'><p>ericpolley@live.com</p></a>
      <p className='m-4'>(509)868-2692</p>
      <p className='m-4'>Discord: erpolley#5318</p>

     
</div>



      </div> </div>
  )
}
