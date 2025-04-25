import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="überuns">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Über Uns</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Wir sind eine authentische Pizzeria inmitten Weddings und verschönern dir mit unserem sizilianischen Steinofen deinen Tag.</p>
        <button type="button" className="custom__button">Erfahre Mehr</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Unser Laden</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Wir haben unseren Laden im Sommer 2025 eröffnet und erhofften uns damals die Straßen wiederzubeleben und den Appetit der gesamten Nachbarschaft anzuregen.</p>
        <button type="button" className="custom__button">Erfahre Mehr</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
