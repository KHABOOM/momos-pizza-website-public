import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menü">
    <div className="app__specialMenu-title">
      <SubHeading title="Unsere Auswahl" />
      <h1 className="headtext__cormorant">MOMO&apos;s MENÜ</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_pizza  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza</p>
        <div className="app__specialMenu_menu_items">
          {data.pizza.map((pizza, index) => (
            <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_pasta  flex__center">
        <p className="app__specialMenu-menu_heading">Pasta</p>
        <div className="app__specialMenu_menu_items">
          {data.pasta.map((pasta, index) => (
            <MenuItem key={pasta.title + index} title={pasta.title} price={pasta.price} tags={pasta.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Siehe Mehr</button>
    </div>
  </div>
);

export default SpecialMenu;
