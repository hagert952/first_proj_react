import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About/About'
import Contact from './Contact/Contact'
 import {createBrowserRouter, RouterProvider}from 'react-router-dom';
 import Portfolio from './Portfolio/Portfolio';
 import StartPage from './StartPage/StartPage'
import Layout from './Layout/Layout'
 
 let x=createBrowserRouter(
  [
    {path:"",element:<Layout/>,children:[

      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"startpage",element:<StartPage/>},
      {index:true,element:<StartPage/>},
    ]},
   
  ]
 )
function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={x}>
    
  </RouterProvider>
}

export default App
