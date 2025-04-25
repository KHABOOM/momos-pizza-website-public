import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Wofür wir stehen" />
      <h1 className="headtext__cormorant">Unser Familienbetrieb</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Dieser Betrieb lässt mein Herz erbeben.</p>
        </div>
        <p className="p__opensans">Jeden Morgen tun wir im Regen stehen, damit diese Pizza deine Seele segnet. Jeden Abend lassen wir den Ofen schlafen, um mit der Sauce deine Sinne zu erwachen. </p>
      </div>

      <div className="app__chef-sign">
        <p>Mohamad El-Azzi</p>
        <p className="p__opensans">Gründer</p>
      </div>
    </div>
  </div>
);

export default Chef;
