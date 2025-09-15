import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './sidebar';
import Header from '../molecules/Header';

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div> 
      <Header/>
      <div>Dashboard page</div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout