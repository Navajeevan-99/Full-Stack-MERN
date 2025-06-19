import React, { useState } from 'react'
const Counter = () => {
    const [c,count]=useState(0);
  return (
    <div>
        <h1>{c}</h1>
    <button onClick={()=>{
        count(c+1)
    }}>count</button>
    </div>
  )
}
export default Counter