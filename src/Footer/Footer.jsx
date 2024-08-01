import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className='bg-slate-700 w-full'>
<div className=" container mx-auto sm:flex-row flex-wrap flex justify-center align-items-center text-center">
  
<div className='w-full py-12 flex flex-col gap-1 md:1/3 sm:w-1/2  md:w-1/3 lg:w-1/3 text-white'>
<h1 className='font-bold text-lg'>LOCATION</h1>
<p className='text-xs'>2215 John Daniel Drive

</p>
<p className='text-xs '>Clark, MO 65243

</p>
</div>
<div className='w-full sm:w-1/2  md:w-1/3 lg:w-1/3 py-12 flex flex-col gap-1 md:1/3  text-white'>
<h1 className='font-bold text-lg'>AROUND THE WEB</h1>
<div className='flex gap-2 mx-auto'>
  
  <div className='w-7 h-7 rounded-full border border-spacing-1  border-white  '>  <i class="fa-brands fa-facebook"></i></div>
  
  <div className='w-7 h-7 rounded-full border border-spacing-1  border-white  '>
<i class="fa-brands fa-twitter"></i></div>
<div className='w-7 h-7 rounded-full border border-spacing-1  border-white  '>
<i class="fa-brands fa-linkedin-in"></i> </div>
<div className='w-7 h-7 rounded-full border border-spacing-1  border-white  '>
<i class="fa-solid fa-globe"></i></div>
</div>
{/* <p className='text-xs'>2215 John Daniel Drive

</p>
<p className='text-xs '>Clark, MO 65243

</p> */}
</div>
<div className='w-full sm:w-1/2 py-12 flex flex-col gap-1  md:w-1/3 lg:w-1/3 text-white md:1/3 '>
<h1 className='font-bold text-lg'>ABOUT FREELANCER</h1>
<p className='text-xs'>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>
{/* <p className='text-xs '>Clark, MO 65243

</p> */}
</div>

</div>
</div>
<div className='bg-slate-900 w-full'>
<div className='py-2 container mx-auto sm:flex-row flex-wrap flex justify-center align-items-center text-center' >
  <p className='text-xs font-light text-white'>Copyright © Your Website 2021</p>
  </div></div>
</footer>
  )
}
