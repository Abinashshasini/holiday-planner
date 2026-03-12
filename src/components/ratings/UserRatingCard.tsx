'use client';
import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import classes from './ratings.module.scss';

type TProps = {
  name: string;
  message: string;
  rating: string;
  time: string;
  packageInfo?: string;
  index: number;
  isFeatured?: boolean;
};

const UserRatingCard: FC<TProps> = ({ name, message, rating, time, packageInfo, index }) => {
  const colorArray = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#14B8A6'];
  const avatarBg = colorArray[index % colorArray.length];

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <div className={classes.avatar} style={{ background: avatarBg }}>
          {name.charAt(0)}
        </div>
        <div className={classes.userInfo}>
          <h5>{name}</h5>
          <span className={classes.time}>{time}</span>
        </div>
        <div className={classes.ratingBadgeSmall}>
          {rating} <FaStar />
        </div>
      </div>
      
      {packageInfo && (
        <div className={classes.packageBadge}>
          <span className={classes.verifiedText}>Verified Trip:</span> {packageInfo}
        </div>
      )}
      
      <p className={classes.reviewText}>&quot;{message}&quot;</p>
    </div>
  );
};

export default UserRatingCard;
