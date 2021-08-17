import React from 'react';
import { Link } from 'react-router-dom'

// The NavbarLink function is used to create the navigation links

const NavbarLink = ({ link }) => {
    return (
        <li>
            <Link to={link.location}>{link.title}</Link>
        </li>
    )
}

export default NavbarLink;