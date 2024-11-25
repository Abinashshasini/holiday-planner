'use client';
import React, { useState } from 'react';
import Heading from '../heading';
import classes from './getInTouch.module.scss';

type TUserData = {
  name: string;
  number: string;
  message: string;
};

const GetInTouch = () => {
  /** Required states and refs */
  const [userData, setUserData] = useState<TUserData>({
    name: '',
    number: '',
    message: '',
  });
  const { name = '', number = '', message = '' } = userData;

  /** Function to get input values */
  const handleGetInputValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className={classes.container}>
      <Heading textOne="Get In Touch" textTwo="With Us" />
      <div className={classes.wrapper}>
        <div className={classes.inputCnt}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => handleGetInputValues(e)}
          />
        </div>

        <div className={classes.inputCnt}>
          <label>+91</label>
          <input
            type="number"
            placeholder="Your Number"
            value={number}
            onChange={(e) => handleGetInputValues(e)}
            name="number"
          />
        </div>

        <div className={classes.textArea}>
          <textarea
            placeholder="Your Message"
            maxLength={200}
            value={message}
            name="message"
            onChange={(e) => handleGetInputValues(e)}
          />
        </div>

        <button>Request for call back</button>
      </div>
    </div>
  );
};

export default GetInTouch;
