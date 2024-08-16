import React from 'react';
import Header from './components/header';

import About from './components/About';
import Services from './components/Services';
import Locations from './components/Team';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import './index.css';

import {Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div>

      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="locations">
        <Locations />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
