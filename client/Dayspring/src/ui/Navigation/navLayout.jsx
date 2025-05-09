import React  from 'react'
import daySpringLogo from "../../assets/daySpringLogo.png"
import Button from '../../components/Button'

// import store from './store'


function NavLayout() {
  // const state = store.getState()
  // const isLoggedIn = state.user.isLogin
 
 
  // const isLoggedIn = state.user.isLogin
  
  // const 
  
 return (
    <div className='flex items-center justify-between
px-4 py-4 mb-2
w-full h-20
absolute top-0 left-0 bg-orange-500



z-20
border-b border-t border-stone-800 rounded-md
'>
    <div>
    <ul className='flex items-center'>
    <img src={daySpringLogo} className=' h-auto w-36'/>
    <li><Button type={"secondary"}>Home</Button></li>
    </ul>
    </div>
      
            <div>
            <ul  className='flex items-center gap-4 mr-2'>
            
            <Button type={"secondary"} to={"/newuser/signup"}>Sign-up</Button>
            <Button type={"secondary"} to={"/newuser/login"} >Login</Button>
            
           
            </ul>
            </div>
    </div>
  )
}

export default NavLayout