import React from 'react';
import UserRatingCard from './UserRatingCard';
import classes from './ratings.module.scss';
import Heading from '../heading';
import { userRatingData } from '@/utils';

const Ratings = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Testimonials" />

      <div className={classes.overalRatingcontainer}>
        <div className={classes.overalRatingWraper}>
          <h3>4.8</h3>
        </div>
        <div className={classes.textWarper}>
          <h4>200+ Ratings</h4>
          <p>Overall rating is based on ratings across the web.</p>
        </div>
      </div>
      {userRatingData.map((element, index) => (
        <UserRatingCard
          message={element.message}
          name={element.name}
          rating={element.rating}
          time={element.time}
          key={element.id}
          index={index}
        />
      ))}
    </div>
  );
};

export default Ratings;
