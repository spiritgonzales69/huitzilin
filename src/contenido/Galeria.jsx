import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHaeding from '../components/SubHaeding';
import images from '../imagenes/image';
import './Galeria.css';

const Galeria = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    };
  
    return (
      <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <SubHaeding title="Instagram" />
          <h1 className="headtext__cormorant">Fotos de Galeria</h1>
          <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
            el abuso en el consumo de este producto puede causar exceso de felicidad, aunque los expertos
            dicen que "es nocivo para la salud"..
            En hutzilin Oaxaqueño solo podemos confirmar que quien toma mezcal vive menos:
            <p>menos estresado</p>
            <p>menos enojado</p>
            <p>menos amargado</p>
            </p>
          <button type="button" className="custom__button">Ver Mas</button>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
  );
};

export default Galeria;