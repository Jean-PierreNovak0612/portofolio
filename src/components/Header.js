import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = ({ links = [] }) => {

    const renderSublinks = (sublinks) => {
        return sublinks.map(sublink => {
            return <li key={sublink.title}><Link className="nav-link" to={sublink.location}>{sublink.title}</Link></li>
        })
    }

    const renderLinkWithSublinks = (link) => {
        return (
            <li key={link.title}>
                <Link className="nav-link desktop-link" to={link.location}>{link.title}</Link>
                <label htmlFor={`sublinks-${link.position}`} className="nav-link">{link.title} +</label>
                <input type="checkbox" id={`sublinks-${link.position}`} className="sublinks-toggle" />   
                <ul className="sublinks">
                    {renderSublinks(link.sublinks)}
                </ul>
                             
            </li>
        )
    }

    const renderLinks = () => {
        if(!links) return null;
        return links.map(link => {
            if(link.sublinks) return renderLinkWithSublinks(link);
            return <li key={link.title}><Link className="nav-link" to={link.location}>{link.title}</Link></li>
        })
    }

    return (
        <header>
            <Link to="/" className="logo"><h1>MyPortoPage</h1></Link>
            <input type="checkbox" id="toggle-nav" className="toggle-navbar" />
            <label htmlFor="toggle-nav" className="toggle-nav-label"><span className="hamburger-icon"></span><span className="close-nav-icon"></span></label>
            <nav>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
        </header>
    )
}

export default Header;