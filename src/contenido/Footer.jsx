import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { PiedePagina, Boletin } from '../components';
import images from '../imagenes/image';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <PiedePagina />
    <Boletin />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Colaboradores</h1>
        <p className="p__opensans">programacion e imagen: gersson</p>
        <p className="p__opensans">produccion de empaques de cajas MDF:</p>
        <p className="p__opensans"> fav-lav ciudad retoño</p>
        <p className="p__opensans">preparacion de chapulines: Sra. esperanza guzman</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.hutzilin} alt="footer_logo" />
        <p className="p__opensans">"La mejor manera de encontrarte a ti mismo es perdiendote en el servicio a los demas".</p>
        <p className="p__opensans">fundador: edmundo Cruz hernandez.</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/HuitzilinOax/'><FiFacebook /> </a>
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">colaboradores</h1>
        <p className="p__opensans">diseño: angel uriel serrano</p>
        <p className="p__opensans">fotografia: alejandro retama</p>
        <p className="p__opensans">cocteleria: chef eduardo benavides</p>

        
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 hutzilin. Todos los derechos reservados.</p>
      <p className="p__opensans"> developer: Gersson gutierrez velazquez</p>
    </div>

  </div>
);

export default Footer;