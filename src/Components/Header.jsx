import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
      <div>
          <div className="w3-bar w3-purple w3-large">
            <Link to={"/"} className="w3-bar-item w3-button  w3-margin-left-24">Activity 1</Link>
            <Link to={"/"} className="w3-bar-item w3-button w3-hide-small w3-right w3-margin-right-24">Counter-app</Link>
            <Link to={"/colorbutton"} className="w3-bar-item w3-button w3-hide-small w3-right w3-margin-right-24">Color-button</Link>
            <Link to={"/cardlist"} className="w3-bar-item w3-button w3-hide-small w3-right w3-margin-right-24">CardList</Link>
            <Link to={"/todolist"} className="w3-bar-item w3-button w3-hide-small w3-right">TodoList</Link>
            <Link to={"/calculator"} className="w3-bar-item w3-button w3-hide-small w3-right">Calculator</Link>
            <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={toggleLinks}>&#9776;</button>
          </div>

          <div id="demo" className={`w3-bar-block w3-purple ${showLinks ? 'w3-show' : 'w3-hide w3-hide-large w3-hide-medium '}`}>
          <Link to={"/"} className="w3-bar-item w3-button  w3-margin-left-24">HelloWorld</Link>
          <Link to={"/colorbutton"} className="w3-bar-item w3-button  w3-margin-left-24">Color-button</Link>
            <Link to={"/cardlist"} className="w3-bar-item w3-button  w3-margin-left-24">CardList</Link>
            <Link to={"/todolist"} className="w3-bar-item w3-button  w3-margin-left-24">TodoList</Link>
            <Link to={"/calculator"} className="w3-bar-item w3-button  w3-margin-left-24">Calculator</Link>
          </div>

        </div>
  )
}

export default Header