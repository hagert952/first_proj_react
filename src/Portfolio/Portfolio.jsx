import React, { useState } from 'react'
import port1 from '../assets/poert1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedImageSrc, setClickedImageSrc] = useState('');
  const handleImageClick = (event) => {
      const imgElement = event.currentTarget.querySelector('img');
      if (imgElement) {
        console.log('Image src:', imgElement.src);
        setIsVisible(true);
        setClickedImageSrc(imgElement.src);
        console.log(setClickedImageSrc(imgElement.src));
  }}
  const  handleBackgroundClick = () =>{
    setIsVisible(false);
    setClickedImageSrc('');
  }
  const  handleimgClick = (event) =>{
event.stopPropagation()    
  }
  return (
    
    <div className="w-full relative gap-5">
    <div className="container mx-auto py-5 gap-5  flex flex-col ">
      <h1 className="text-xl  font-bold  text-center">
      portfolio component
      </h1>
      <div className="flex mx-auto gap-3 py-5  ">
        <div className="w-16 h-1 bg-black"></div>
        <i className="fa-solid fa-star  text-lg"></i>
        <div className="w-16 h-1 bg-black"></div>
      </div>
      <div className="flex flex-wrap justify-center     items-center gap-5   ">
      {/* <div className="relative group"> */}
      <div className="relative group row  w-full h-46 lg:w-1/5 sm:w-1/3  md:w-1/4 cursor-pointer "onClick={handleImageClick}>
            <img
              src={port1}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute  inset-0  f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity " onClick={handleImageClick}>
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
            </div>
      <div className=" relative group row  w-full h-46  cursor-pointer lg:w-1/5 sm:w-1/3  md:w-1/4 " onClick={handleImageClick}   >
            <img
              src={port2}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className=" absolute inset-0  f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity ">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div></div>
      <div className="relative group row  w-full h-46  cursor-pointer lg:w-1/5 sm:w-1/3  md:w-1/4"  onClick={handleImageClick} >
            <img
              src={port3}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute inset-0  f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity ">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div></div>
   
            {/* </div> */}
      {/* <img src={port2} alt="Location" className=" px-5 py-5 " />
      <img src={port3} alt="Location" className="  px-5 py-5 " /> */}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
      {/* <div className="relative group"> */}
      <div className="relative group row  w-full h-46  cursor-pointer lg:w-1/5 sm:w-1/3  md:w-1/4" onClick={handleImageClick} >
            <img
              src={port1}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute  inset-0  f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity ">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div></div>

      <div className="relative group row   w-52 h-46  w-full h-46  cursor-pointer lg:w-1/5 sm:w-1/3  md:w-1/4" onClick={handleImageClick}>
            <img
              src={port2}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute inset-0  f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity ">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div></div>
      <div className="relative group row w-full h-46  lg:w-1/5 sm:w-1/3  md:w-1/4   cursor-pointer"onClick={handleImageClick}>
            <img
              src={port3}
              alt="Location"
              className=" cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 f bg-teal-700 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100   transition-opacity ">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
           
            </div></div>
   
            {/* </div> */}
      {/* <img src={port2} alt="Location" className=" px-5 py-5 " />
      <img src={port3} alt="Location" className="  px-5 py-5 " /> */}
      </div>
    </div>
<div>

  
</div>
<div></div>
<div onClick={handleBackgroundClick} className={`fixed inset-0  bg-black bg-opacity-60 flex items-center justify-center   ${isVisible ? 'flex' : 'hidden'}`}>
<img onClick={handleimgClick} src={clickedImageSrc} alt="" className=' w-72 h-56 ' />

 
</div>

    

   
  </div>
  
  )
}