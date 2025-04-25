import React from 'react';
import { Footer, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

const MenuList = () => (
    <div>
        <Navbar />
        <Header />
        <SpecialMenu />
        <Intro />
        <Footer />
    </div>
);

export default MenuList;