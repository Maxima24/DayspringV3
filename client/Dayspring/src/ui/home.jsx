import React from 'react'
import {  Navigate, Outlet, } from 'react-router-dom'

function Home() {
  
  // const token = localStorage.getItem("token")
  // if(!token) return <Navigate to="/newuser/login"/>
  return (
    <div>

        <Outlet/>
    </div>
  )
}

export default Home