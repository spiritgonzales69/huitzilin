import React from 'react';

import images from '../imagenes/image';
import './SobreNosotros.css';

const SobreNosotros = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Acerca de Nosotros</h1>
        <p className="p__opensans">Somos una marca que busca posicionarse en el gusto del mercado, ofreciendo productos tradicionales y representativos del estado de oaxaca.</p>
        <button type="button" className="custom__button">Saber Mas</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <p className="p__opensans">Somos un grupo de amigos que despues de haber coincidido en nuestros andares decidimos emprender con este proyecto. estamos seguros que vamos a satisfacer dos grandes placeres de la vida: comer y beber.</p>
        <button type="button" className="custom__button">Saber Mas</button>
      </div>
    </div>
  </div>
);

export default SobreNosotros;