import React from 'react';

import { AboutUs, Founder, FindUs, Footer, Gallery, Header, Intro} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Founder />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
