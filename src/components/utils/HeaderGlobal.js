import React from 'react';
import { FaCog, FaBell, FaUser } from 'react-icons/fa';

function HeaderGlobal() {
    return (
        <header className='header-global'>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' />
            </div>
            <div className='header-icons'>
                <div className='icon'><FaUser /></div>
                <div className='icon'><FaBell /></div>
                <div className='icon'><FaCog /></div>
            </div>

        </header>
    );
}

export default HeaderGlobal;
