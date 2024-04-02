import React,{useState} from 'react'
import Header from '../Components/Header';

function Calculator() {
  
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const total = number1 + number2;


  return (
    <div >
      <Header />
      <br/>
      <h1 className='w3-center'>Simple calculator that can only add 2 numbers</h1>
      <br/>
      <div className='w3-center'>
        <input type="number" placeholder='Input a number' class=""  value={number1} 
        onChange={e => setNumber1(+e.target.value)}/>
        <br />
        <br />
        <input type='number' placeholder='Input a number' value={number2}
        onChange={e => setNumber2(+e.target.value)}/>
        <h1>Total = {total}</h1>
      </div>
    </div>
  )
}

export default Calculator