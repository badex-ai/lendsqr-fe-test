import React from 'react'
import { NavLink, } from 'react-router-dom'
import styles from './sideBarLink.module.scss'
import {NavLinkType} from '../../types'

type Props = NavLinkType

function SideBarLink({link,icon : Icon,name}: Props) {
  return (
    <>
    <NavLink to={link}
     className={({ isActive }) => 
        `${styles.sidebarLink} ${isActive ? styles.sidebarLink_active : ""}`}>
        {/* <div> */}
          <span className={styles.sidebarLink_icon}><Icon/></span>
          
          <span className={styles.sidebarLink_text}>{name}</span>
         
        {/* </div> */}
    
    </NavLink>
    </>
    
  )
}

export default SideBarLink