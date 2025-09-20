import React from 'react'
import styles from './userDetails.module.scss'
import { Link } from 'react-router-dom'
import { BlackListIcon,ActivateUserIcon,EyeIcon } from '../../assets/icons'

type Props = {}

const UserDetails = (props: Props) => {
  return (
    <div className={styles.userDetails}>
        <ul>
            <li>
            <Link to='details'>
                <span className={styles.userDetails_icon}><EyeIcon/></span> View Details
            </Link>
        </li>
        <li>
            <span className={styles.userDetails_icon}><BlackListIcon/></span>
            BlackList User
        </li>
        <li>
            <span className={styles.userDetails_icon}><ActivateUserIcon/></span>
            Activate User
        </li>
        </ul>
        
    </div>
  )
}

export default UserDetails