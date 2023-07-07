/*Home:

Description: Renders the home component.
Functionality: Displays a welcome message and a brief description of the app. */

import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  
  return (
    <div className='container'>
        <div className='welcome-container'>
           <h1>Welcome to <b>Ambula!</b></h1>
           <p>Building a healthier India, together!</p>
        </div>
    </div>
  )
}

export default Home;
