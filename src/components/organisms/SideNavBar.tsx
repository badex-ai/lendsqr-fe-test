import React from 'react'
import styles from "./sideNavBar.module.scss"
import SideBarLink from '../atoms/SideBarLink'
import {NavLinkType,NavLinkArray} from '../../types'
import { BriefCase2Icon,Briefcase1Icon,NextIcon,UserFriendsIcon,Users2Icon, CoinsSolidIcon ,GalaxyIcon, CashHandIcon,TransactionIcon,SlidersIcon,BankIcon,ChartIcon,ClipboardIcon,BadgePercentIcon,ScrollIcon,UserCogIcon,UserTimesIcon, UserCheckIcon,HandshakeIcon, PiggyBankIcon, SackIcon,} from '../../assets/icons'

// type sideBarProps = {
//     link: string
//     name: string
//     icon: any
// }


const Sidebar = () => {

  

    const customersLinks :NavLinkArray = [
  { name: "Users", link: "/dashboard/users", icon: UserFriendsIcon },
  { name: "Guarantors", link: "guarantors", icon: Users2Icon },
  { name: "Loans", link: "loans", icon: SackIcon },
  { name: "Decision Models", link: "models", icon: HandshakeIcon },
  { name: "Savings", link: "savings", icon: PiggyBankIcon },
  { name: "Loan Requests", link: "loan-request", icon: CashHandIcon },
  { name: "Whitelist", link: "whitelist", icon: UserCheckIcon},
  { name: "Karma", link: "karma", icon: UserTimesIcon },
];
   const servicesLinks :NavLinkArray=  [
  { name: "Organization", link: "organization", icon: Briefcase1Icon },
  { name: "Loan Products", link: "loan-product", icon: CashHandIcon },
  { name: "Savings Products", link: "savings-products", icon: BankIcon },
  { name: "Fees and Charges", link: "fees-charges", icon: CoinsSolidIcon },
  { name: "Transactions", link: "transactions", icon: TransactionIcon },
  { name: "Services", link: "services", icon: GalaxyIcon },
  { name: "Service Account", link: "service-account", icon: UserCogIcon },
  { name: "Settlements", link: "settlements", icon: ScrollIcon},
  { name: "Reports", link: "reports", icon: ChartIcon },
];

   const businessesLinks :NavLinkArray = [
  { name: "Preferences", link: "preferences", icon: SlidersIcon },
  { name: "Fees and Pricing", link: "fees-and-pricing", icon: BadgePercentIcon },
  { name: "Audit Logs", link: "audit-logs", icon: ClipboardIcon },
   { name: "Systems Messages", link: "systems-messages", icon: ClipboardIcon },
];

   const customerTabLinks = customersLinks.map((obj:NavLinkType)=>{
    return <SideBarLink key={`sidebar${obj.name}`} name ={obj.name} link={obj.link} icon={obj.icon} />
   })

    const businessesTabLinks = businessesLinks.map((obj:NavLinkType)=>{
    return <SideBarLink key={`sidebar${obj.name}`} name ={obj.name} link={obj.link} icon={obj.icon} />
   })

    const servicesTabLinks = servicesLinks.map((obj:NavLinkType)=>{
    return <SideBarLink key={`sidebar${obj.name}`} name ={obj.name} link={obj.link} icon={obj.icon} />
   })
  return (
    
      <nav className={styles.sidebar}>

      <div className={styles.sidebar_tenet  } >
        <BriefCase2Icon/>
        <span>
          Switch organisation
        </span>
          <NextIcon/>
        
      </div>
      
      <div>
      <div className={styles.sidebar_categories} >
        customers
      </div>
      <div>
        {customerTabLinks}
      </div>

      </div>

      <div>
      <div className={styles.sidebar_categories}>
        Businesses
      </div>
      <div>
        {businessesTabLinks}
      </div>

      </div>

       <div>
      <div className={styles.sidebar_categories}>
        Services
      </div>
      <div>
        {servicesTabLinks}
      </div>

      </div>
     

    </nav>
    
  )
}

export default Sidebar