import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Auth/PrivateRoute';
import Navbar from './components/common/Navbar';
import { isAuthenticated } from './services/auth.service';

function App() {
    return (
        <Router>
            {isAuthenticated() && <Navbar />}
            <Routes>
                <Route path="/login" element={
                    isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
        </Router>
    );
}

export default App;