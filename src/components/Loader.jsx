import React from 'react'
import Loading from "../assets/loading.gif"
function Loader() {
  return (
    <div>
       <img src={Loading} className='w-[150px] h-[150px]' loading='lazy' alt="" />
        <p>Loading</p>
    </div>
  )
}

export default Loader
