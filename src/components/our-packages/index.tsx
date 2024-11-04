import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import Heading from '../heading';
import { ourPackagesData } from '@/utils';
import classes from './ourPackages.module.scss';

const OurPackages = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Our" textTwo="Packages" />
      <ul className={classes.wrapper}>
        {ourPackagesData.map((element) => (
          <li
            key={element.id}
            style={{ backgroundImage: `url(${element.image.src})` }}
          >
            <div className={classes.detailsWrp}>
              <div className={classes.detailsWrpTextOne}>
                <h3>{element.title}</h3>
                <span>{element.timing}</span>
              </div>
              <div className={classes.detailsWrpLocation}>
                <div className={classes.locationIcon}>
                  <CiLocationOn color="#000" />
                </div>
                <p>{element.location}</p>
              </div>
              <div className={classes.priceCnt}>₹ {element.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurPackages;
