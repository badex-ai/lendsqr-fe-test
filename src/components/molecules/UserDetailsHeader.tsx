import React from 'react'
import { AvatarIcon } from '../../assets/icons'
import { NavLink,Link } from 'react-router-dom'
import styles from './userDetailsHeader.module.scss'
import {StarIcon} from '../../assets/icons/index'
import { UserInfoType } from '../../types'
import {useIsMobile,useIsTablet} from '../../hooks/IsMobile';


type Props = {
  userInfo: UserInfoType
}

const UserDetailsHeader = ({userInfo}: Props) => {
const isMobile = useIsMobile();
const isTablet = useIsTablet()

let navItems
if(isMobile.Tiny || isMobile.Big || isTablet){
  navItems  =[
  { label: "General", to: "general" },
  { label: "Documents", to: "documents" },
  { label: "Bank ", to: "bank-details" },
  { label: "Loans", to: "loans" },
  { label: "Savings", to: "savings" },
  { label: "System", to: "app-system" }
];
}else{
  navItems =  [
  { label: "General Details", to: "general" },
  { label: "Documents", to: "documents" },
  { label: "Bank Details", to: "bank-details" },
  { label: "Loans", to: "loans" },
  { label: "Savings", to: "savings" },
  { label: "App and System", to: "app-system" }
]
}

   



 const links = <ul>
  {navItems.map((item) => (
    <li key={item.to}>
      <NavLink key={`3-${item.label}`} className={({ isActive }) => 
        `${styles.userDetailsHeader_nav_li} ${isActive ? styles.userDetailsHeader_nav_li_active : ""}`} to={item.to}>{item.label}</NavLink>
    </li>
  ))}
</ul>

 const  userTier  = userInfo.accountInformation.tier
  const filledStar = Array.from({ length: userTier }, (_, i) => (
  <StarIcon  key={i} fill={true} />
))

  const EmptyStar = userTier === 3 ? null :  Array.from({length: 3 - Number(userTier) }, (_, i) => (
  <StarIcon key={i} />
))



  return (
    <div className={styles.userDetailsHeader}>
      <div className={styles.userDetailsHeader_top}>
        
          <AvatarIcon/>
          <div className={styles.userDetailsHeader_top_details}>
            <div className={styles.userDetailsHeader_top_details_first}>
              <div className={styles.userDetailsHeader_top_details_head}>{userInfo.personalInformation.fullName}</div>
              <div>{userInfo.id}</div>

            </div>
            <div className={styles.userDetailsHeader_top_details_tier}>
              <div > User's Tier</div>
             <div className={styles.userDetailsHeader_top_details_tier_icon}>{filledStar}{EmptyStar}</div>
              
            </div>
            <div className={styles.userDetailsHeader_top_details_last}>
              <div className={styles.userDetailsHeader_top_details_head}>{userInfo.accountInformation.accountBalance}</div>
              <div className={styles.userDetailsHeader_top_details_sub}>{userInfo.accountInformation.accountNumber}/{userInfo.accountInformation.bankName}</div>
            </div>
          </div>

       
        

      </div>
      <nav className={styles.userDetailsHeader_nav}>
       {links}

      </nav>
    </div>
  )
}

export default UserDetailsHeader