import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './SideNavBar';
import Header from '../molecules/Header';
import styles from './dashboardLayout.module.scss'

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div className={styles.dashboardLayout}> 
      <Header/>
      <div className={styles.dashboardLayout_body}>
        <div className={styles.dashboardLayout_body_nav}>
          <Sidebar/>
        </div>
        <div className={styles.dashboardLayout_body_page}>
          <Outlet/>
        </div>
      </div>
    
      
      
    </div>
  )
}

export default DashboardLayout