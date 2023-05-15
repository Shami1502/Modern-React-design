import React from 'react';
import {CTA , Navbar , Brand} from './components';
import { Features,Blog, Footer, Header, Possibilty,WhatGBT3} from './container';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGBT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
