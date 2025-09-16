import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/organisms/DashboardLayout';
// import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        {/* Public routes (e.g. login) that don't use the main layout */}
        <Route path="/login" element={<Login />} />

        {/* Routes that use MainLayout */}
        <Route element={<DashboardLayout/>}>
           <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/users/details" element={<UserDetails />} />
          
        </Route>

        {/* Fallback / catch-all */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
