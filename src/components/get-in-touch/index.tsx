'use client';
import React, { useState } from 'react';
import Heading from '../heading';
import classes from './getInTouch.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

interface FormData {
  name: string;
  number: string;
  message?: string; // Optional
}

const GetInTouch = () => {
  /** Required states and refs */
  const [userData, setUserData] = useState<FormData>({
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
    if (name === 'number' && value.length > 10) {
      return;
    }
    setUserData({ ...userData, [name]: value });
  };

  /**
   * Function to validate credentials.
   * Validate Name, Validate Mobile Number & Return whether the form is valid
   */
  const handleValidateCredential = () => {
    let isValid = true;

    const nameRegex = /^[a-zA-Z]{3,60}$/;
    if (!nameRegex.test(userData.name)) {
      toast.error('Please enter a valid name.');
      isValid = false;
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(userData.number)) {
      toast.error('Mobile number must be a valid 10-digit Indian number.');
      isValid = false;
      return;
    }

    return isValid;
  };

  /** Function to submit the values to server */
  const handleSubmit = async () => {
    if (handleValidateCredential()) {
      console.log('Form Submitted', userData);
      setUserData({ name: '', number: '', message: '' });
      try {
        const response = await axios.post(
          'https://holiday-planner-be.vercel.app/api/v1/leads/submit-lead',
          {
            name,
            number,
            message,
          }
        );
        if (response) {
          toast.success('Hurray uour response successfully submited!');
        } else {
          toast.error('Something went wrong please try again.');
        }
      } catch (error) {
        console.log('Error', error);
        toast.error('Something went wrong please try again.');
      }
    }
  };

  return (
    <div className={classes.container}>
      <Toaster position="bottom-center" reverseOrder={false} />
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
            pattern="[0-9]*"
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

        <button onClick={handleSubmit}>Request for call back</button>
      </div>
    </div>
  );
};

export default GetInTouch;
