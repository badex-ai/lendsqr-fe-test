import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './SideNavBar';
import Header from '../molecules/Header';

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div> 
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout