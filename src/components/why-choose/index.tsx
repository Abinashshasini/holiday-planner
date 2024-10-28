import React from 'react';
import Heading from '../heading';
import classes from './whyChoose.module.scss';
import { whyChooseUsData } from '@/utils';

const WhyChooseUs = () => {
  return (
    <div className={classes.container}>
      <Heading textOne="Why Choose" textTwo="Holiday Planner" />

      <div className={classes.wrapper}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          odit optio similique numquam dolorem corporis vel, eius mollitia
          incidunt, assumenda dolorum, iure ullam reiciendis ducimus delectus!
          Ipsa, voluptate cumque atque expedita culpa magnam itaque eligendi
          repudiandae fuga enim sunt animi quos eveniet pariatur, voluptates
          repellat aspernatur doloribus ipsum nisi necessitatibus.
        </h1>

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
