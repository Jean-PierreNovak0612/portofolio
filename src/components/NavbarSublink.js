import React, { useState } from 'react';

import '../css/NavbarSublink.css';

import NavbarLink from './NavbarLink';

// The NavbarSublink is creating navigation links with sublinks 

const NavbarSublink = ({ link, closeNav, navigation }) => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

    // Function that generates the sublinks for navigation links
    
    const GenerateLinks = () => {
        return link.sublinks.map(sublink => {
            return <NavbarLink className="navbar-sublink" key={sublink.title} closeNav={closeNav} link={sublink} navigation={navigation} />;
        })
    }

    return (
        <li className="navbar-link-container">
            <label className="navbar-label" onClick={() => setToggleDropdown(!toggleDropdown)}>{link.title} <span className={toggleDropdown ? 'dropdown-icon active' : 'dropdown-icon'}>+</span></label>
            <ul className={toggleDropdown ? 'navbar-sublink-container active' : 'navbar-sublink-container'}>
                {GenerateLinks()}
            </ul>
        </li>
    )
}

export default NavbarSublink;