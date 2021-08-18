import React from 'react';
import { Link } from 'react-router-dom'

import '../css/NavbarLink.css';

// The NavbarLink function is used to create the navigation links

const NavbarLink = ({ link, closeNav, navigation, addedClass = "" }) => {

    // Function that closes the navbar when a link has been clicked

    const Selected = () => {
        closeNav(false);
    }

    return (
        <li className={"navbar-link-container " + addedClass}>
            <Link className={navigation ? 'navbar-link active' : 'navbar-link'} to={link.location} onClick={Selected}>{link.title}</Link>
        </li>
    )
}

export default NavbarLink;