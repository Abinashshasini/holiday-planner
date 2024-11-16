import React, { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './ratings.module.scss';

type TProps = {
  name: string;
  message: string;
  rating: string;
  time: string;
  index: number;
};

const UserRatingCard: FC<TProps> = ({ name, message, rating, time, index }) => {
  const colorArray = ['#f25da3', '#3498db', '#e67e22', '#4CAF50', '#6c757d'];
  return (
    <div className={classes.userRatingcontainer}>
      <div className={classes.topSectionWrp}>
        <div
          className={classes.userIcon}
          style={{ background: colorArray[index] }}
        >
          {name.slice(0, 1)}
        </div>
        <div className={classes.userInfo}>
          <h5>{name}</h5>
          <div className={classes.userratingDetails}>
            <div className={classes.userRating}>
              {rating} <FaStar />
            </div>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <p className={classes.userReview}>{message}</p>
    </div>
  );
};

export default UserRatingCard;
