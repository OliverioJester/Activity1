import React,{useState} from 'react'
import Header from '../Components/Header'

function Colorbutton() {

    const [buttonColor, setButtonColor] = useState('purple');
    const handleButtonClick = () => {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Update the button color state
        setButtonColor(randomColor);
      };
    
  return (
    <div>
        <Header/>
        <div className='w3-display-middle'>
            <button className='w3-btn '
                  style={{ backgroundColor: buttonColor }} 
                  onClick={handleButtonClick}>Click me</button>
        </div>
    </div>
  )
}

export default Colorbutton