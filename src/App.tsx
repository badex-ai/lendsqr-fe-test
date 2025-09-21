import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/organisms/DashboardLayout';
// import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';
import { UserProvider } from './context/userContext';
import GeneralDetails from './components/organisms/GeneralDetails';
import ProtectedRoute from './pages/ProtectedDashboardLayout';
import ProtectedDashboardLayout from './pages/ProtectedDashboardLayout';


function App() {
 


  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        {/* Public routes (e.g. login) that don't use the main layout */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

       <Route path="/dashboard" element={<ProtectedDashboardLayout/>}>
        <Route path="users" element={<UsersPage/>} />
        <Route path="users/details" element={<UserDetails />}>
          <Route path="general" element={<GeneralDetails/>} />
        </Route>
       </Route>

        {/* Fallback / catch-all */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
