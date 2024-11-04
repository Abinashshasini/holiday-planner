import React from 'react';
import UserRatingCard from './UserRatingCard';
import classes from './ratings.module.scss';
import Heading from '../heading';

const Ratings = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Testimonials" />

      <div className={classes.overalRatingcontainer}>
        <div className={classes.overalRatingWraper}>
          <h3>4.5</h3>
        </div>
        <div className={classes.textWarper}>
          <h4>1k+ Ratings</h4>
          <p>Overall rating is based on ratings across the web.</p>
        </div>
      </div>
      <UserRatingCard />
      <UserRatingCard />
      <UserRatingCard />
      <UserRatingCard />
    </div>
  );
};

export default Ratings;
