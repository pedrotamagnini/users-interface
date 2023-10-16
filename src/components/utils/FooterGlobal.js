import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './FooterGlobal.css';

function FooterGlobal() {
    return (
        <footer className='footer-global'>
            <div className='footer-content'>
                <p>© 2023 - Pedro Tamagnini</p>
                <p>All rights reserved</p>
                <div className='social-icons'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon-facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="icon-twitter" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon-instagram" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon-linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterGlobal;

