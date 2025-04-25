import React from 'react';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Decoration,
  SpecialMenu
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Decoration />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
