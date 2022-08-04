import React from 'react';


import images from '../imagenes/image';

const Encuentranos = () => (
  <div className="app__bg app__wrapper section__padding" id="contacto">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Los Reyes, 56400 Los Reyes Acaquilpan, Méx.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horarios</p>
        <p className="p__opensans">Lun - Vie: 10:00 am - 02:00 pm</p>
        <p className="p__opensans">Sab - Dom: 10:00 am - 03:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default Encuentranos;