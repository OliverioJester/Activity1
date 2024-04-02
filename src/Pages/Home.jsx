import React, { useState } from 'react';
import Header from '../Components/Header'

function Home() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1) 
  }

  const Decrement = () => {
    setCount(count - 1) 
  }

  const Reset = () => {
    setCount(0) 
  }

  return (
    <div>
      <Header/>
      <div className='w3-container'>
        <h1 className=' w3-center'>Hello World</h1>
          <h2 className=' w3-center'>{count}</h2>

            <div className='w3-center'>
            <br/>
              <button className='w3-button w3-btn w3-blue w3-margin w3-shadow w3-hover-blue' onClick={Increment}>
                Increment
              </button>

              <button className='w3-button w3-btn w3-red w3-margin w3-hover-red' onClick={Decrement}>
                Decrement
              </button>

              <button className='w3-button w3-btn w3-purple w3-margin w3-hover-purple' onClick={Reset}>
                Reset
              </button>

          </div>
      </div>  
    </div>
  )
}

export default Home