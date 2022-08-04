import React from 'react';

import SubHaeding from './SubHaeding';
import './Boletin.css';

const Boletin = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHaeding title="Boletin Informativo" />
      <h1 className="headtext">Suscribete</h1>
      <p className="p__opensans">Nunca te pierdas nuestras ultimas actualizaciones!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Introduce tu correo electronico" />
      <button type="button" className="custom__button">Subscribirse</button>
    </div>
  </div>
);

export default Boletin ;