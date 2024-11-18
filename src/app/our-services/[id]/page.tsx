'use server';
import React from 'react';
import Heading from '@/components/heading';
import { serviceDetailsData } from '@/utils';
import classes from './style.module.scss';
import RFQCard from '@/components/rfq-card';
import GetInTouch from '@/components/get-in-touch';
import WhyChooseUs from '@/components/why-choose';
import ContactDetails from '@/components/contact-details';
import { TcarInfo, TCarRental } from '@/utils/types';

const OurServices = ({ params }: { params: { id: string } }) => {
  const data = serviceDetailsData[params.id];
  return (
    <div className={classes.container}>
      {data.hTextOne !== '' && (
        <Heading textOne={data.hTextOne} textTwo={data.hTextTwo} />
      )}
      {data.type === 'table' && (
        <div className={classes.tableCnt}>
          {data.tData.map((element: TCarRental) => (
            <div key={element.id} className={classes.tableWraper}>
              <div className={classes.tableHeading}>
                <h2>{element.carName}</h2>
              </div>
              {element.data.map((carDetails: TcarInfo) => (
                <div className={classes.infocnt}>
                  <span>{carDetails.info}</span>
                  <span>{carDetails.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <GetInTouch />
      <WhyChooseUs />
      <RFQCard />
      <ContactDetails />
    </div>
  );
};

export default OurServices;
