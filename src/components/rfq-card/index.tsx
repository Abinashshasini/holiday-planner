import React from 'react';
import classes from './rfqCard.module.scss';

const RFQCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Dreaming of your next Adventure?</h2>
        <p>Hit us up!</p>
        <button>Request a Quote</button>
      </div>
    </div>
  );
};

export default RFQCard;
