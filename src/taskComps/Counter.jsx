import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div className='container'>
      {count}
      <div className="btns">
        <button onClick={()=>setCount((prev)=>prev+1)}>Add +</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>Sub -</button>
      </div>
    </div>
  )
}

export default Counter
