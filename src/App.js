// dependencies
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// content module import
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';

import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';
// styling
import './App.css';


function App() {
  return(

    <div>
      <Nav />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/aboutMe" element = {<AboutMe />} />
        <Route path="/booking" element ={<Booking />} />
      </Routes>
    </div>


  );
}

export default App;
