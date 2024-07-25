import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Authentication/AdminLogin';
import UserLogin from './Authentication/UserLogin';
import Signup from './Authentication/Signup'; // Assume you have a Signup component
import Main from './Authentication/MainPage'; // Assume you have a Home component
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage" element={<HomePage />}/>
        </Routes>
        </Router>
        </div>
      );
    };
    
    export default App;
/*
*/