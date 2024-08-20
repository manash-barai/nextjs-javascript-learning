"use client"
import React, { useEffect } from 'react'

const Error = ({error,reset}) => {

  useEffect(()=>{
    console.log(error);
    
  },[error])
  return (
    <div>
     <h2>Some thing went wrong</h2>
     <button onClick={()=>reset()}  >
      try again

     </button>
    </div>
  )
}

export default Error
