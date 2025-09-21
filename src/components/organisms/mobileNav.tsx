import React from 'react';
import styles from './mobileNav.module.scss';
import { 
  BriefCase2Icon, 
  Briefcase1Icon, 
  NextIcon, 
  UserFriendsIcon, 
  Users2Icon, 
  CoinsSolidIcon, 
  GalaxyIcon, 
  CashHandIcon, 
  TransactionIcon, 
  SlidersIcon, 
  BankIcon, 
  ChartIcon, 
  ClipboardIcon, 
  BadgePercentIcon, 
  ScrollIcon, 
  UserCogIcon, 
  UserTimesIcon, 
  UserCheckIcon, 
  HandshakeIcon, 
  PiggyBankIcon, 
  SackIcon 
} from '../../assets/icons';
// import { Link } from 'react-router-dom'; // Commented out for artifact compatibility

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const customersLinks = [
    { name: "Users", link: "/dashboard/users", icon: null },
    { name: "Guarantors", link: "guarantors", icon: null },
    { name: "Loans", link: "loans", icon: null },
    { name: "Decision Models", link: "models", icon: null },
    { name: "Savings", link: "savings", icon: null },
    { name: "Loan Requests", link: "loan-request", icon: null },
    { name: "Whitelist", link: "whitelist", icon: null },
    { name: "Karma", link: "karma", icon: null },
  ];

  const servicesLinks = [
    { name: "Organization", link: "organization", icon: null },
    { name: "Loan Products", link: "loan-product", icon: null },
    { name: "Savings Products", link: "savings-products", icon: null },
    { name: "Fees and Charges", link: "fees-charges", icon: null },
    { name: "Transactions", link: "transactions", icon: null },
    { name: "Services", link: "services", icon: null },
    { name: "Service Account", link: "service-account", icon: null },
    { name: "Settlements", link: "settlements", icon: null },
    { name: "Reports", link: "reports", icon: null },
  ];

  const businessesLinks = [
    { name: "Preferences", link: "preferences", icon: null },
    { name: "Fees and Pricing", link: "fees-and-pricing", icon: null },
    { name: "Audit Logs", link: "audit-logs", icon: null },
    { name: "Systems Messages", link: "systems-messages", icon: null },
  ];

  const customerTabLinks = customersLinks.map((obj) => {
    return (
      <a 
        key={`sidebar${obj.name}`} 
        href={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </a>
    );
  });

  const businessesTabLinks = businessesLinks.map((obj) => {
    return (
      <a 
        key={`sidebar${obj.name}`} 
        href={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </a>
    );
  });

  const servicesTabLinks = servicesLinks.map((obj) => {
    return (
      <a 
        key={`sidebar${obj.name}`} 
        href={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </a>
    );
  });

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.mobileNavOverlay} ${isOpen ? styles.open : ''}`}
        onClick={handleOverlayClick}
      />
      
      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        {/* Close Button */}
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close navigation"
        >
          ×
        </button>

        <div className={styles.sidebar_tenet  } >
        <BriefCase2Icon/>
        <span>
          Switch organisation
        </span>
          <NextIcon/>
        
      </div>

        <div className={styles.sidebar}>
          <div>
            <div className={styles.sidebar_categories}>
              Customers
            </div>
            <ul>
              <li>
                {customerTabLinks}
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.sidebar_categories}>
              Businesses
            </div>
            <ul>
              <li>
                {businessesTabLinks}
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.sidebar_categories}>
              Services
            </div>
            <ul>
              <li>
                {servicesTabLinks}
              </li>
            </ul>
          </div>
        </div>
         {/* Docs at bottom */}
          <div className={styles.docsSection}>
            <a href="/docs" onClick={onClose}>Docs</a>
          </div>
      </div>
    </>
  );
};

export default MobileNav;