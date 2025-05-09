import React from 'react'
import NavLayout from '../Navigation/navLayout'
import Hero from './hero'
import Button from '../../components/Button'


function LandingPage() {
  return (
    <div className=' h-lvh flex flex-col overflow-hidden '>
      <NavLayout/>
       
         <Hero/>
     
       
        
    </div>
  )
}

export default LandingPage