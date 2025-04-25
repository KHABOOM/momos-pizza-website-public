import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Decoration.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__decoration_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__decoration_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Decoration = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Für unsere Qualität gibt es:" />
      <h1 className="headtext__cormorant">Unsere Versprechen</h1>

      <div className="app__decoration_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.decoration} alt="decoration_img" />
    </div>
  </div>
);

export default Decoration;
