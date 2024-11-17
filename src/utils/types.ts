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
