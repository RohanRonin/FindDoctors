import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Authentication/AdminLogin';
import UserLogin from './Authentication/UserLogin';
import Signup from './Authentication/Signup';
import HomePage from './Pages/HomePage';
import HospitalPage from './Pages/HospitalPage/HospitalPage';
import SpecialistPage from './Pages/SpecialistPage/SpecialistPage';
import MainLayout from '../src/Pages/MainLayout';
import MainPage from './Authentication/MainPage'
import './App.css';
import DoctorPage from './Pages/DoctorPage/DoctorPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="Mainp" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hospital" element={<MainLayout><HospitalPage /></MainLayout>} />
          <Route path="/specialist" element={<MainLayout><SpecialistPage /></MainLayout>} />
          <Route path="/doctor" element={<MainLayout><DoctorPage /></MainLayout>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;