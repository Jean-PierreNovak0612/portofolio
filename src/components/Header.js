import React, { useState } from 'react';    
import { Link } from 'react-router-dom';

import '../css/Header.css';

import NavbarLink from './NavbarLink';
import NavbarSublink from './NavbarSublink'
import { NAV_LINKS as links } from '../data'

// The Header component that will contain the navigation

const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const [toggle, setToggle] = useState(false);

    // Functon that changes the state of the navigation variable depending on how far the user has scrolled

    const ChangeBackgroundColor = () => {
        if(window.scrollY >= 80){
            setNavigation(true);
        }
        else {
            setNavigation(false);
        }
    }

    // Function that changes the logo image depending on how far the user has scrolled

    const displayLogo = () => {
        if (navigation) {
            return process.env.PUBLIC_URL + '/images/logo_dark.png';
        }
        return process.env.PUBLIC_URL + '/images/logo_light.png';
    }

    // Function that toggles the toggle variable on click

    const onHamburgerClick = () => {
        setToggle(!toggle)
    }

    // Function that generates the links on the navbar

    const GenerateLinks = () => {
        return links.map(link => {
            if(link.sublinks) return <NavbarSublink key={link.title} closeNav={setToggle} link={link} navigation={navigation} />
            return <NavbarLink key={link.title} closeNav={setToggle} link={link} navigation={navigation} />
        })
    }

    // Listening for the scroll event to change the background color of the navigation

    window.addEventListener('scroll', ChangeBackgroundColor);

    return (
        <header className={navigation ? 'navigation active' : 'navigation'}>
            <Link to="/">
                <img className="logo" onClick={() => setToggle(false)} src={displayLogo()} />
            </Link>
            <div className={toggle ? 'ham-menu-container open' : 'ham-menu-container'} onClick={onHamburgerClick}>
                <div className={navigation ? 'ham-menu active' : 'ham-menu'}></div>
            </div>
            <nav className={navigation ? 'navbar scrolled' : 'navbar'}>
                <ul className={toggle ? 'link-list active' : 'link-list'}>
                    {GenerateLinks()}
                </ul>
            </nav>
        </header>
    );
}

export default Header;