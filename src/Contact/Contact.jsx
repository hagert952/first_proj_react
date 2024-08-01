import React from 'react'

export default function Contact() {
  return (
    <div className="w-full">
    <div className="container mx-auto py-5 px-4 flex flex-col items-center py-10 ">
      <h1 className="text-xl  font-bold  text-center">
      Conatct Section
      </h1>
      <div className="flex items-center  mx-auto gap-3 py-5">
        <div className="w-16 h-1  bg-black"></div>
        <i className="fa-solid fa-star  text-lg"></i>
        <div className="w-16 h-1 bg-black"></div>
      </div>
      <div className="flex flex-col sm:flex-col sm:justify-center lg:w-1/2 sm:w-3/4 w-full sm:w-100 md:w-100  mx-auto ">
      <form action="" className='flex flex-col w-full mx-auto gap-5 py-3 '>
        <input type="text" placeholder='userName' className=' placeholder:text-xs text-light border  border-0 border-b-2  focus:border-b-1 focus:border-gray-200 focus:outline-none '/>
        <input type="text" placeholder='userAge' className=' placeholder:text-xs text-light border  border-0 border-b-2  focus:border-b-1 focus:border-gray-200 focus:outline-none'/>
        <input type="text"placeholder='userEmail 'className=' placeholder:text-xs text-light border  border-0 border-b-2  focus:border-b-1 focus:border-gray-200 focus:outline-none' />
        <input type="text" placeholder='userPassword'className=' placeholder:text-xs text-light border  border-0 border-b-2  focus:border-b-1 focus:border-gray-200 focus:outline-none'/>
      </form>
      <button className='flex   m-auto bg-green-500 w-24 justify-center rounded text-white text-xs py-2 flex-wrap  '>Send Message</button>
      </div>
    </div>
  </div>
  )
}
