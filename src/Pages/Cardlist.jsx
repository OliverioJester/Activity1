import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'


function Cardlist() {
  const [data, setData] = useState([]);

  const Card = ({ avatar, name, description }) => {
    return (
      <div className="w3-third w3-mobile w3-center w3-card-2 w3-margin w3-hover-shadow" style={{ width: '350px' }}>
        <img src={avatar} alt={name}  style={{ width: '100px' }}/>
        <div className='w3-container'>
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
      </div>
    );
  };

    
  
    useEffect(() => {
      fetch('https://random-data-api.com/api/users/random_user?size=5')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

  return (
    <div>
    <Header/>
    <div className='w3-container'>
      <h1 className='w3-center'>Card List</h1>
      <p className='w3-center'>(Refresh the page if not showing)</p>
      <br/>
      <div className="w3-row-padding w3-padding-16 w3-margin-right  w3-context w3-center" >
        {data.map((user, index) => (
          <Card
            className=""
            key={index}
            avatar={user.avatar}
            name={user.first_name + ' ' + user.last_name}
            description={user.email}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Cardlist