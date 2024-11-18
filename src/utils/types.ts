import { StaticImageData } from 'next/image';

export type OurServices = {
  id: number;
  image: StaticImageData;
  title: string;
  buttonText: string;
  Icon: string | null;
  showIcon: boolean;
  URL: string;
  action: string;
  message: string;
};

export type TcarInfo = {
  info: string;
  price: string;
};

export type TCarRental = {
  id: number;
  carName: string;
  data: TcarInfo[];
};

export type TluxuryImages = {
  id: number;
  carName: string;
  capacity: string;
  image: {
    src: string;
  };
};
