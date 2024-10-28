import React from 'react';
import Heading from '../heading';
import classes from './getInTouch.module.scss';

const GetInTouch = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Get In Touch" textTwo="With Us" />
      <div className={classes.wrapper}>
        <div className={classes.inputCnt}>
          <input type="text" placeholder="Your Name" />
        </div>

        <div className={classes.inputCnt}>
          <label>+91</label>
          <input type="number" placeholder="Your Number" />
        </div>

        <div className={classes.textArea}>
          <textarea placeholder="Your Message" maxLength={200} />
        </div>

        <button>Request for call back</button>
      </div>
    </div>
  );
};

export default GetInTouch;
