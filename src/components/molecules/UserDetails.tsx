import React from 'react'
import styles from './userDetails.module.scss'
import { Link } from 'react-router-dom'
import { BlackListIcon,ActivateUserIcon,EyeIcon } from '../../assets/icons'

type Props = {}

const UserDetails = (props: Props) => {
  return (
    <div className={styles.userDetails}>
        <div>
            <Link to={'/details'}>
                <span className={styles.userDetails_icon}><EyeIcon/></span> View Details
            </Link>
        </div>
        <div>
            <span className={styles.userDetails_icon}><BlackListIcon/></span>
            BlackList User
        </div>
        <div>
            <span className={styles.userDetails_icon}><ActivateUserIcon/></span>
            Activate User
        </div>
    </div>
  )
}

export default UserDetails