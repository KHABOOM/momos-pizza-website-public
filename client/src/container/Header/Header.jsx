import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="startseite">
    <div className="app__wrapper_info">
      <SubHeading title="Eine Pizza die deine Sinne betäubt" />
      <h1 className="app__header-h1">MOMO&apos;s PIZZA</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Unser Familienbetrieb der dir all deine Wünsche erfüllt. </p>
      <a href="#menü" className="custom__button">Zum Menü</a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
