import React from 'react';
import { FaUser, FaStar } from 'react-icons/fa';
import classes from './ratings.module.scss';

const UserRatingCard = () => {
  return (
    <div className={classes.userRatingcontainer}>
      <div className={classes.topSectionWrp}>
        <div className={classes.userIcon}>
          <FaUser />
        </div>
        <div className={classes.userInfo}>
          <h5>Courtney Henry</h5>
          <div className={classes.userratingDetails}>
            <div className={classes.userRating}>
              4 <FaStar />
            </div>
            <p>10 Hours ago</p>
          </div>
        </div>
      </div>
      <p className={classes.userReview}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quasi,
        officia rem, id delectus iure, eum sunt saepe illo optio accusamus
        excepturi fuga neque amet maxime labore culpa? Reprehenderit, rem!
      </p>
    </div>
  );
};

export default UserRatingCard;
