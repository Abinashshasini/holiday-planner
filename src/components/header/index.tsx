import React, { FC } from 'react';
import { LogoImage, MenuImage } from '@/utils';
import classes from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={LogoImage.src} alt="logo_main" width={185} height={40} />
      </div>
      <div>
        <img src={MenuImage.src} alt="menu_icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
