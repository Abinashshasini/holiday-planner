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
  index: number;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const UserRatingCard: FC<TProps> = ({ name, message, rating, time, index }) => {
  const colorArray = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];
  const avatarBg = colorArray[index % colorArray.length];

  return (
    <motion.div 
      className={classes.card}
      variants={itemVariants}
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}
    >
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
      <p className={classes.reviewText}>"{message}"</p>
    </motion.div>
  );
};

export default UserRatingCard;
