import React from 'react'
import SearchBar from './SearchBar'
import {NotifIcon, Logo} from '../../assets/icons/index'
import styles from "./header.module.scss";
import { useUser } from '../../context/userContext';
import { User } from '../../types';
import { Link } from 'react-router-dom';
import { DropDownIcon } from '../../assets/icons/index';

type Props = {}

const Header = (props: Props) => {

    const {user}  = useUser()


    function handleUserInfoDropDown() {
      console.log('drop down initiated')
      
    }

    console.log('this is the user',user)
  return (
    <div className={styles.header}>
      
    <Link to={'users'} className={styles.header_logo}>
        <Logo/>
    </Link>
    <div>
    <SearchBar/>
    </div>
    <div className={styles.header_userInfo}>
      <Link className={styles.header_userInfo_link} to='#'>Docs</Link>

      <div>
        <NotifIcon className={styles.header_userInfo_notif} />
      </div>
      

      <div className={styles.header_userInfo_image}>
        <img src={user?.image} alt="user profile" />
      </div>
    
      <div className={styles.header_userInfo_expand} >
        <div>{user?.name}</div>
        <DropDownIcon onClick={handleUserInfoDropDown}/>
      </div>
     
     
  
    </div>


    </div>
  )
}

export default Header