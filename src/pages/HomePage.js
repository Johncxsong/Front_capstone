// dependencies
import React from 'react';

// content module import
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Section from './components/Section';
import Article from './components/Article';
import Footer from './components/Footer';



const HomePage = () =>{

    return(
        <div className='homePage'>
        <Header />
        <Nav />
        <main>
          <Aside />
          <Section>
            <Article />
          </Section>
        </main>
        <Footer />
      </div>
    );
};


export default HomePage;