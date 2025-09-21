import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/organisms/DashboardLayout';

const ProtectedDashboardLayout: React.FC = () => {
  const userFromStorage = localStorage.getItem('lqwfreyiurs-rd');

 
  
  if (!userFromStorage) {
    return <Navigate to="/login" replace />;
  }

  return <DashboardLayout />;
};

export default ProtectedDashboardLayout;