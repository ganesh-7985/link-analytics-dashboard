import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth.service';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/dashboard" className="text-white font-bold text-xl">
                            Link Analytics
                        </Link>
                    </div>
                    <div>
                        <button
                            onClick={handleLogout}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;