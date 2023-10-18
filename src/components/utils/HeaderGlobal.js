import React, { useState } from 'react';
import { FaCog, FaBell, FaUser } from 'react-icons/fa';
import './HeaderGlobal.css';

function HeaderGlobal() {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleLogout = () => {
        setIsLoginSuccessful(false);
    };

    const closeLoginPopup = () => {
        setShowLogin(false);
    };

    const handleLoginSuccess = () => {
        setIsLoginSuccessful(true);
        closeLoginPopup();
    };

    return (
        <header className="header-global">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-icons">
                <div className="icon" onClick={isLoginSuccessful ? handleLogout : handleLoginClick}>
                    {isLoginSuccessful ? <button className="logout-button">Logout</button> : <FaUser />}
                </div>
                <div className="icon">
                    <FaBell />
                </div>
                <div className="icon">
                    <FaCog />
                </div>
            </div>

            {showLogin && !isLoginSuccessful && (
                <div className="login-popup">
                    <Login onLoginSuccess={handleLoginSuccess} />
                    <button className="close-button" onClick={closeLoginPopup}>
                        X
                    </button>
                </div>
            )}
        </header>
    );
}

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'User' && password === '123456') {
            alert('Login successful!');
            onLoginSuccess();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="User"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Enter</button>
        </div>
    );
}

export default HeaderGlobal;
