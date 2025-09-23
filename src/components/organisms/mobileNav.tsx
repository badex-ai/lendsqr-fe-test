import React, { useEffect, useRef } from 'react';
import styles from './mobileNav.module.scss';
import { 
  BriefCase2Icon, 
  NextIcon, 
  LogoutIcon
} from '../../assets/icons';
import { Link } from 'react-router-dom';
import { useLogout } from '../../utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const nav = navRef.current;
    const overlay = overlayRef.current;

    
    
    if (!nav || !overlay) return;

    if (isOpen) {
      
      // void nav.offsetHeight;
      
    
      requestAnimationFrame(() => {
        nav.style.transform = 'translate3d(0, 0, 0)';
        // overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
      });
    } else {
      nav.style.transform = 'translate3d(-100%, 0, 0)';
      // overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    }
  }, [isOpen]);

   const logout = useLogout(); 

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
  
  const businessesLinks = [
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

  const settingsLinks = [
    { name: "Preferences", link: "preferences", icon: null },
    { name: "Fees and Pricing", link: "fees-and-pricing", icon: null },
    { name: "Audit Logs", link: "audit-logs", icon: null },
    { name: "Systems Messages", link: "systems-messages", icon: null },
  ];

  const customerTabLinks = customersLinks.map((obj) => {
    return (
      <Link 
        key={`sidebar${obj.name}`} 
        to={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </Link>
    );
  });

  const businessesTabLinks = businessesLinks.map((obj) => {
    return (
      <Link 
        key={`sidebar${obj.name}`} 
        to={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </Link>
    );
  });

  const settingsTabLinks = settingsLinks.map((obj) => {
    return (
      <Link 
        key={`sidebar${obj.name}`} 
        to={obj.link} 
        onClick={onClose}
      >
        {obj.name}
      </Link>
    );
  });

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className={styles.mobileNavOverlay}
        onClick={handleOverlayClick}
      />
      
      {/* Mobile Navigation */}
      <div ref={navRef} className={styles.mobileNav}>
        {/* Close Button */}
        <button type='button'
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close navigation"
        >
          ×
        </button>

        <div className={styles.sidebar_tenet}>
          <BriefCase2Icon/>
          <span>Switch organisation</span>
          <NextIcon/>
        </div>

        <div className={styles.sidebar}>
          <div>
            <div className={styles.sidebar_categories}>
              CUSTOMERS
            </div>
            <ul>
              <li>
                {customerTabLinks}
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.sidebar_categories}>
              BUSINESSES
            </div>
            <ul>
              <li>
                {businessesTabLinks}
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.sidebar_categories}>
              SETTINGS
            </div>
            <ul>
              <li>
                {settingsTabLinks}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Docs at bottom */}
        <div className={styles.docsSection}>
          <Link to="docs" onClick={onClose}>Docs</Link>
        </div>
        <div className={styles.logout}>
          <button type='button' title='logout' id='logout' onClick={logout}><LogoutIcon/><span>Logout</span></button>
          <div>v1.2.0</div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;