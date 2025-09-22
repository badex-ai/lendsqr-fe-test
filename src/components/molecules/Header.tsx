import React,{useState} from 'react'
import SearchBar from './SearchBar'
import {NotifIcon, Logo} from '../../assets/icons/index'
import styles from "./header.module.scss";
import { useUser } from '../../context/userContext';
import { User } from '../../types';
import { Link } from 'react-router-dom';
import { DropDownIcon } from '../../assets/icons/index';
import { HamburgerMenu } from '../../assets/icons/index';
import MobileNav from '../organisms/mobileNav';
type Props = {}

const Header = (props: Props) => {

    const {user}  = useUser()
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  


    function handleUserInfoDropDown() {
      
      
    }

   const handleOpenMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const handleCloseMobileNav = () => {
    setIsMobileNavOpen(false);
  };

   
  return (
    <div className={styles.header}>
    <button className={styles.header_ham} title='hamburgerIcon' type='button' onClick={handleOpenMobileNav} >
      <HamburgerMenu/>
    </button>
      
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
    <MobileNav isOpen={isMobileNavOpen} onClose={handleCloseMobileNav} />
    </div>

  )
}

export default Header