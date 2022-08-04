import React from 'react';

import { SubHaeding, OpcionMenu } from '../components';
import image from '../imagenes/image';
import data from '../data';
import './Menu.css';

const Menu = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHaeding title="cocteleria de la casa" />
      <h1 className="headtext__cormorant">mezcales y recetas</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Mezcal</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <OpcionMenu key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={image.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Mezcalinas</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <OpcionMenu key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Ver Más</button>
    </div>
  </div>
);

export default Menu;