/* eslint-disable @next/next/no-img-element */
'use server';
import React from 'react';
import { ourServicesData } from '@/utils';
import Heading from '../heading';
import classes from './ourServices.module.scss';
import OurServiceButton from './button';

const OurServices = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Our" textTwo="Services" />
      <ul className={classes.servicesWraper}>
        {ourServicesData.map((element) => (
          <li key={element.id}>
            <img alt="background_image" src={element.image.src} />
            <div className={classes.buttonSection}>
              <h2>{element.title}</h2>
              <OurServiceButton data={element} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurServices;
