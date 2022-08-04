import React from 'react';

import SubHaeding from '../components/SubHaeding';
import { images } from '../components';
import './Encabezado.css';

const Encabezado = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      < SubHaeding title="Explorar El Nuevo Sabor" />
      <h1 className="app__header-h1">¡Huitzilin Oaxaqueño!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Destilacion Artesanal 100% Oaxaqueño</p>
      <button type="button" className="custom__button">Explorar el Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.inicio} alt="header_img" />
    </div>
  </div>
);

export default Encabezado;