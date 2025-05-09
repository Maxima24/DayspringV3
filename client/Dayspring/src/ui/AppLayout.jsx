import React, { useEffect } from 'react'
import NavLayout from './Navigation/navLayout'
import {Outlet} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { logOutUser } from '../feautures/userSlice'


function AppLayout() {
  const dispatch = useDispatch()
  // const dispatch = useDispatch()
  useEffect(() => {
    const handleUnload = () => {
      dispatch(logOutUser()); // reset Redux state
      // localStorage.removeItem("token"); // clear token (optional)
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  return (
    <div className=" overflow-auto overflow-x-hidden max-h-screen ">
      
        <main className='overflow-auto'>
            <Outlet/>
        </main>
       
    </div>
  )
}

export default AppLayout