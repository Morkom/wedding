import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, ContactUs } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <ContactUs />
    <Chef />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer />
  </div>
);

export default App;
