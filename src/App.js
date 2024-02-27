// dependencies
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

// content module import
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';

import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';
import { AlertProvider } from './context/alertContext';
// styling
import './App.css';


function App() {
  return(

    <ChakraProvider>
      <AlertProvider>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/aboutMe" element = {<AboutMe />} />
            <Route path="/booking" element ={<Booking />} />
          </Routes>
        </div>
      </AlertProvider>
    </ChakraProvider>

  );
}

export default App;
