import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ links, social }) => {

    const renderSocialLinks = () => {
        if(!social) return null;
        return social.map(link => {
            return <Link to={link.location} className="foorer-link"><i className={`bi bi-${link.title}`} /></Link>
        })
    }
    
    const renderLinks = () => {
        if(!links) return null;
        return links.map(link => {
            return <Link to={link.location} className="footer-link">{link.title}</Link>
        })
    }

    return (
        <footer>
            <div>
                <div className="page-links">
                    {renderLinks()}
                </div>
                <div className="social-links">
                    {renderSocialLinks()}
                </div>
            </div>
            <div className="copyright">&copy; 2021 - {new Date().getFullYear()}</div>
        </footer>
    )
};

export default Footer;