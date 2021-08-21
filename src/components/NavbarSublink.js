import React, { useState } from 'react';

import '../css/NavbarSublink.css';

import NavbarLink from './NavbarLink';

// The NavbarSublink is creating navigation links with sublinks 

const NavbarSublink = ({ link, closeNav, navigation }) => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

    // Function that changes the language of the

    const ChangeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        window.location.reload();
    }

    // Function that generates the sublinks for navigation links
    
    const GenerateLinks = () => {
        return link.sublinks.map(sublink => {
            if(!sublink.location){
                return <li key={sublink.title} className={navigation ? 'navbar-link active navbar-sublink' : 'navbar-link navbar-sublink'} onClick={() => ChangeLanguage(sublink.value)}>{sublink.title}</li>
            }
            return <NavbarLink className="navbar-sublink" key={sublink.title} closeNav={closeNav} link={sublink} navigation={navigation} addedClass="sublink" />;
        })
    }

    // Function that determines the class that the sublink container should have

    const SublinkListClass = () => {
        if(navigation && toggleDropdown) return 'navbar-sublink-container active scrolled'
        if(toggleDropdown) return 'navbar-sublink-container active'
        if(navigation) return 'navbar-sublink-container scrolled'
        return 'navbar-sublink-container'
    }

    return (
        <li className="navbar-link-container">
            <label className={navigation ? 'navbar-label active' : 'navbar-label'} onClick={() => setToggleDropdown(!toggleDropdown)}>{link.title} <span className={toggleDropdown ? 'dropdown-icon active' : 'dropdown-icon'}>+</span></label>
            <ul className={SublinkListClass()}>
                {GenerateLinks()}
            </ul>
        </li>
    )
}

export default NavbarSublink;