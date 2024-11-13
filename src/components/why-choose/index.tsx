import React from 'react';
import Heading from '../heading';
import classes from './whyChoose.module.scss';
import { whyChooseUsData } from '@/utils';

const WhyChooseUs = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Why Choose" textTwo="Holiday Planner" />

      <div className={classes.wrapper}>
        <h2>
          Welcome to Holiday Planners! Based in Bhubaneswar, Odisha, we
          specialize in cultural and nature-focused holiday experiences across
          India and beyond. Our mission is to guide you through both popular
          historical sites and hidden gems, immersing you in the rich culture of
          each destination.
          <br />
          <br />
          With government-recognized, highly trained guides and English-speaking
          chauffeurs, we ensure an authentic, insightful travel experience. Our
          dedicated team provides personalized support, handling all the details
          to make your journey seamless and memorable. Discover the world with
          Holiday Planners—your gateway to unique, hassle-free adventures!
        </h2>

        <ul className={classes.servicesWrp}>
          {whyChooseUsData.map((element) => (
            <li key={element.id}>
              {<element.Icon />}
              <p>{element.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
