import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const menus = [
    { key: 'home', label: 'Home' },
    { key: 'users', label: 'Users' },
    { key: 'posts', label: 'Posts' },
    { key: 'comments', label: 'Comments' },
    { key: 'about', label: 'About' },
]

const Nav = ({ items, dispatch }) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClassFixed = isFixed ? 'nav-container fixed' : 'nav-container';

    return (
        <nav className={navClassFixed}>
            <ul className='nav-bar'>
                {menus.map(item => (
                    item.key && (
                        <li key={item.key}>
                            <Link to={`/${item.key}`}>{item.label}</Link>
                        </li>
                    )
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
