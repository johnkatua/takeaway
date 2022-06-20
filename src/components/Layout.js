import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Bio from '../pages/Bio';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import "./index.css";

const Layout = () => {
  return (
    <main className='layout--wrapper'>
      <Header />
      <Home />
      <Bio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default Layout