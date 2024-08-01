import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return  <>
  <Navbar/>

<div className=" w-full  ">

<Outlet/>

</div>




  <Footer/>
  </>
  
}
