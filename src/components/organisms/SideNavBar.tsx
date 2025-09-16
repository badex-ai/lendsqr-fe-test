import React from 'react'
import styles from "./sideNavBar.module.scss"
import SideBarLink from '../atoms/SideBarLink'
import {NavLinkType,NavLinkArray} from '../../types'
import { BriefCase2Icon,Briefcase1Icon,NextIcon,UserFriendsIcon,Users2Icon, CoinsSolidIcon ,GalaxyIcon, CashHandIcon,TransactionIcon,SlidersIcon,BankIcon,ChartIcon,ClipboardIcon,BadgePercentIcon,ScrollIcon,UserCogIcon,UserTimesIcon, UserCheckIcon,HandshakeIcon, PiggyBankIcon, SackIcon} from '../../assets/icons'

// type sideBarProps = {
//     link: string
//     name: string
//     icon: any
// }


const Sidebar = () => {

  

    const customersLinks :NavLinkArray = [
  { name: "Users", link: "/dashboard/users", icon: UserFriendsIcon },
  { name: "Guarantors", link: "/", icon: Users2Icon },
  { name: "Loans", link: "/", icon: SackIcon },
  { name: "Decision Models", link: "/", icon: HandshakeIcon },
  { name: "Savings", link: "/", icon: PiggyBankIcon },
  { name: "Loan Requests", link: "/", icon: CashHandIcon },
  { name: "Whitelist", link: "/", icon: UserCheckIcon},
  { name: "Karma", link: "/", icon: UserTimesIcon },
];
   const servicesLinks :NavLinkArray=  [
  { name: "Organization", link: "/", icon: Briefcase1Icon },
  { name: "Loan Products", link: "/", icon: CashHandIcon },
  { name: "Savings Products", link: "/", icon: BankIcon },
  { name: "Fees and Charges", link: "/", icon: CoinsSolidIcon },
  { name: "Transactions", link: "/", icon: TransactionIcon },
  { name: "Services", link: "/", icon: GalaxyIcon },
  { name: "Service Account", link: "/", icon: UserCogIcon },
  { name: "Settlements", link: "/", icon: ScrollIcon},
  { name: "Reports", link: "/", icon: ChartIcon },
];

   const businessesLinks :NavLinkArray = [
  { name: "Preferences", link: "/", icon: SlidersIcon },
  { name: "Fees and Pricing", link: "/", icon: BadgePercentIcon },
  { name: "Audit Logs", link: "/", icon: ClipboardIcon },
];

   const customerTabLinks = customersLinks.map((obj:NavLinkType)=>{
    return <SideBarLink  name ={obj.name} link={obj.link} icon={obj.icon} />
   })

    const businessesTabLinks = businessesLinks.map((obj:NavLinkType)=>{
    return <SideBarLink  name ={obj.name} link={obj.link} icon={obj.icon} />
   })

    const servicesTabLinks = servicesLinks.map((obj:NavLinkType)=>{
    return <SideBarLink  name ={obj.name} link={obj.link} icon={obj.icon} />
   })
  return (
      <div className={styles.sidebar}>

      <div className={styles.sidebar_tenet  } >
        <BriefCase2Icon/>
        Switch organisation
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
     

    </div>
  )
}

export default Sidebar