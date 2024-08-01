import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=' p-4 bg-slate-700'>
    <div className="container mx-auto flex justify-between items-center">
   <ul>
  <li className='font-bold text-xl text-decoration-none style text-white list-none items-center'>
    <Link to="startpage">Start Framework </Link> </li>
  
   </ul> 
  <ul  className='flex gap-1 text-xs font-bold text-white items-center '>
  <li className='active: '>
  <NavLink to="about"className='' >About</NavLink> 
 </li>
  <li>
    <NavLink to="portfolio" >Portfolio</NavLink>
 </li>
 <li> <NavLink to="contact" >  Contact</NavLink> 
 </li>
    </ul>
  
    </div>

{/* <i className='fab fa-facebook text-2xl '></i> */}

</div>
  )
}
