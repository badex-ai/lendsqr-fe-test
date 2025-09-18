import React from 'react'
import { StatusEnum } from '../../types'
import styles from './badge.module.scss'

type BadgeInputType = {
    text: StatusEnum,
}

const Badge = ({text}: BadgeInputType) => {

   const getStatusColor = (status: StatusEnum) => {
    switch (status) {
      case "Active":
        return styles.badge_green;
      case "Pending":
        return styles.badge_yellow;
      case "Inactive":
        return styles.badge_grey;
      case "Blacklisted":
        return styles.badge_red;
      default:
        return "";
    }
  };

  return (
    <div className={`${styles.badge} ${getStatusColor(text)}`}>{text}</div>
  )
}

export default Badge