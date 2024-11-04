/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { popularCitiesData } from '@/utils';
import classes from './popularCities.module.scss';

const PopularCities = () => {
  return (
    <ul className={classes.container}>
      {popularCitiesData.map((element) => (
        <li key={element.id} className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <img src={element.image.src} alt="city_photo" />
          </div>
          <h2>{element.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PopularCities;
