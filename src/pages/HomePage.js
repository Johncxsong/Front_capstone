// dependencies
import React from 'react';

// content module import
import Header from '../components/Header';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Section from '../components/Section';
import Article from '../components/Article';
import Footer from '../components/Footer';




const projects = [
  {
    title: "Pasta",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/1.png"),
  },
  {
    title: "Pasta",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/1.png"),
  },
];

const HomePage = () =>{

    return(
        <div className='homePage'>
        <Header />
        <main>
          {/* <Aside /> */}
          <Section>
            {
              projects.map((project) => (
                <Article
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc()}
                />))
            }
          </Section>
        </main>
        <Footer />
      </div>
    );
};


export default HomePage;