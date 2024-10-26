import React from 'react';
import { popularCitiesData } from '@/utils';
import Image from 'next/image';
import classes from './popularCities.module.scss';

const PopularCities = () => {
  return (
    <ul className={classes.container}>
      {popularCitiesData.map((element) => (
        <li key={element.id} className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <Image
              src={element.image}
              height={98}
              width={68}
              alt="city_photo"
            />
          </div>
          <h2>{element.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PopularCities;
