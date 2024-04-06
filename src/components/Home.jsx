import React, { lazy } from 'react'
import location from "../assets/location.png"
function Home({locationAccessGranted,setLocationAccessGranted}) {
  function accessHandler(){
    setLocationAccessGranted(true)
   }
  return (
    <div>
      <img src={location} className='w-[80px] h-[80px]' loading="lazy" alt="" />
      <p>grant Location Access</p>
      <p>Allow Access to get weather information</p>
      <button onClick={accessHandler} className='' data-grantAccess>Grant Access</button>
    </div>
  )
}

export default Home
