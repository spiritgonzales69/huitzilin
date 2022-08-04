import React from 'react';

import SubHeading from '../components/SubHaeding';
import { images } from '../components';
import data from '../data';
import './Laureles.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } })  => (
    <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laureles = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Personalizacion de cajas " />
      <h1 className="headtext__cormorant">Productos Especiales</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laureles;