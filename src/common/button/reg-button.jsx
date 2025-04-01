import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./reg-button.css"

const Regbutton = () => {
  const navigate = useNavigate();

  const regnav = () => {
    navigate('/register');
  };
  return (
    <div className='register-button-container'>
      <button onClick={regnav}  className='register-button'>REGISTRATIONS CLOSED!</button>
    </div> 
  );
};

export default Regbutton;