import LandingPage from './ui/CTA/landingPage'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import LoginForm,{action as loginAction} from './ui/Auth/loginPage'
import SignUpForm from './ui/Auth/SignUp'
import GuestCart from './ui/Guest/GuestCart'
import UserCart from './ui/User/userCart'
import UserPage from './ui/User/UserPage'
import {action as signUpAction} from './ui/Auth/SignUp'

import UserShop from './ui/User/UserShop'
import AdminPage from './ui/Admin/AdminPage'
import User from './ui/Auth/User'
import Home from './ui/home'
import GuestPage from './ui/Guest/GuestPage'
import Cart from './ui/cart'
import Checkout from './ui/CheckOut/checkout'
import GuestCheckout from './ui/Guest/guestCheckOut'
import UserCheckout from './ui/User/userCheckOut'

// import Shop from './ui/Shop'
// import {action as loginAction} from './ui/Auth/loginPage'

// import { logOutUser } from './feautures/userSlice'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import UserCart from './ui/User/userCart'
const router =createBrowserRouter([
  {element:<AppLayout/>,children:[
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"newuser",element:<User/>,children:[
        {path:"login",element:<LoginForm/>,action:loginAction},
        {path:"signup",element:<SignUpForm/>,action:signUpAction},
      ]
    },{
      path:"home",element:<Home/>, children:[
        {path:"GUEST/:name", element:<GuestPage/>},
        {path:"USER/:usernameid", element:<UserPage/>},
        {path:"ADMIN/:adminid",element:<AdminPage/>}
      ]
      ,
    },
    {path:"cart",element:<Cart/>,children:[
      {path:"GUEST/:name",element:<GuestCart/>},
      {path:"USER/:usernameid" , element:<UserCart/>},
      

    ]},
    {path:"checkout",element:<Checkout/>,children:[
      {path:"GUEST/:username",element:<GuestCheckout/>},
      {path:"USER/:username",element:<UserCheckout/>},
    ]}

  ]}
])


function App() {
  
  

  return <RouterProvider router ={router}/>
}

export default App
