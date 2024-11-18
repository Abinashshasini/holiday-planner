'use server';
import React from 'react';
import Heading from '@/components/heading';
import { serviceDetailsData } from '@/utils';
import classes from './style.module.scss';
import RFQCard from '@/components/rfq-card';
import GetInTouch from '@/components/get-in-touch';
import WhyChooseUs from '@/components/why-choose';
import ContactDetails from '@/components/contact-details';
import { TcarInfo, TCarRental, TluxuryImages } from '@/utils/types';
import CallButton from './callButton';

type Tdata = {
  hTextOne?: string;
  hTextTwo?: string;
  type?: string;
  tData?: TCarRental[];
  imageData?: TluxuryImages[];
};

const OurServices = ({ params }: { params: { id: string } }) => {
  let data: Tdata = {};

  if (params.id === 'car-rental-and-booking') {
    data = serviceDetailsData.carRental;
  } else if (params.id === 'luxury-car-wedding-car') {
    data = serviceDetailsData.luxuryCar;
  } else {
    data = serviceDetailsData.tempoTraveler;
  }

  return (
    <div className={classes.container}>
      {data.hTextOne !== '' && (
        <Heading textOne={data.hTextOne || ''} textTwo={data.hTextTwo} />
      )}
      {/* Table handeling */}
      {data.type === 'table' && (
        <div className={classes.tableCnt}>
          {data &&
            data.tData &&
            data.tData.map((element: TCarRental) => (
              <div key={element.id} className={classes.tableWraper}>
                <div className={classes.tableHeading}>
                  <h2>{element.carName}</h2>
                </div>
                {element.data.map((carDetails: TcarInfo, index) => (
                  <div
                    className={classes.infocnt}
                    key={`${index}-${carDetails.info}`}
                  >
                    <span>{carDetails.info}</span>
                    <span>{carDetails.price}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
      {/* Image handeling */}
      {data.type === 'images' && (
        <div className={classes.tableCnt} style={{ marginTop: '30px' }}>
          {data &&
            data.imageData &&
            data.imageData.map((element: TluxuryImages) => (
              <div key={element.id} className={classes.imgCardWrp}>
                <div className={classes.imgCnt}>
                  <img src={element.image.src} alt="cara_image" />
                </div>
                <div className={classes.textWrp}>
                  <div className={classes.textCnt}>
                    <h2>{element.carName}</h2>
                    <p>{element.capacity}</p>
                  </div>
                  <CallButton />
                </div>
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
