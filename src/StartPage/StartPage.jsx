import React from 'react'
import image1 from '../assets/image1.png'; 
export default function StartPage() {


  // console.log(  <img src="../image1.png" alt="mm"  className="mx-auto mb-4" />);
  return (<>

    <div className='w-full bg-teal-500 flex flex-col py-5 justify-content-center align-center gap-1  mx-auto'>
    {/* <div className=' '> */}
        
        <img src={image1} alt="Location" className="mx-auto  flex" />
        <h1 className='mx-auto font-bold text-3xl text-white'>start Framework</h1>
    <div className='flex mx-auto justify-center items-center gap-2 '> <div className='w-20 h-1 bg-white '></div>   <i class=" fa-solid fa-star text-white"></i>
    <div className='w-20 h-1 bg-white '></div></div>
        <p className='mx-auto text-xs text-white'> Graphic Artist - Web Designer - Illustrator</p>
    </div></>
    // </div>
  )
}
