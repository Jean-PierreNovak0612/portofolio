import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Footer.css';

const Footer = ({ links, social }) => {

    const renderSocialLinks = () => {
        if(!social) return null;
        return social.map(link => {
            return <a key={link.title} target="_blank" rel="noreferrer" href={link.location} className="footer-social-link"><i className={`bi bi-${link.title}`} /></a>
        })
    }
    
    const renderLinks = () => {
        if(!links) return null;
        return links.map(link => {
            return <Link key={link.title} to={link.location} className="footer-link">{link.title}</Link>
        })
    }

    return (
        <footer>
            <div>
                <div className="links">
                    {renderLinks()}
                </div>
                <div className="links">
                    {renderSocialLinks()}
                </div>
            </div>
            <div className="copyright">&copy; 2021 - {new Date().getFullYear()}</div>
        </footer>
    )
};

export default Footer;