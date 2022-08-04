import React from 'react';

import SubHeading from '../components/SubHaeding';
import images from '../imagenes/image';
import './Cocinero.css';


const Cocinero = () => (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Lema del chef" />
        <h1 className="headtext__cormorant">¿En que creemos?</h1>
  
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans"> "un cocinero se convierte en artista cuando...</p>
          </div>
          <p className="p__opensans"> tiene cosas que decir a travez de sus platos,como un pintor en un cuadro " </p>
        </div>
  
        <div className="app__chef-sign">
          <p>eduardo benavides ramirez </p>
          <p className="p__opensans">Chef & Colaborador </p><p className="p__opensans">creador de recetas originales de mezcalinas para huitzilin Oaxaqueño</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
  
  export default Cocinero;