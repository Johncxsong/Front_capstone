// dependencies
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// content module import
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';

import AboutMe from './pages/AboutMe';

// styling
import './App.css';


function App() {
  return(

    <div>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/aboutMe" element = {<AboutMe />} />
      </Routes>
    </div>


  );
}

export default App;
