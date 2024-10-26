import React from 'react';
import { ourServicesData } from '@/utils';
import classes from './ourServices.module.scss';
import Image from 'next/image';
import Heading from '../heading';

const OurServices = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Our" textTwo="Services" />
      <ul className={classes.servicesWraper}>
        {ourServicesData.map((element) => (
          <li key={element.id}>
            <Image alt="background_image" src={element.image} fill />
            <div className={classes.buttonSection}>
              <h2>{element.title}</h2>
              <button>{element.buttonText}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurServices;
