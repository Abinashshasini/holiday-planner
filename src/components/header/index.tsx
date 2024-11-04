import React, { FC } from 'react';
import Image from 'next/image';
import { LogoImage, MenuImage } from '@/utils';
import classes from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <Image
          src={LogoImage}
          alt="logo_main"
          width={185}
          height={40}
          unoptimized
        />
      </div>
      <div>
        <Image
          src={MenuImage}
          alt="menu_icon"
          width={24}
          height={24}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Header;
