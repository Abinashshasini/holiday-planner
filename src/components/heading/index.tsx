import React from 'react';

const Heading = ({
  textOne,
  textTwo,
}: {
  textOne: string;
  textTwo?: string;
}) => {
  return (
    <h1 className="global__heading">
      {textOne} <span>{textTwo}</span>
    </h1>
  );
};

export default Heading;
