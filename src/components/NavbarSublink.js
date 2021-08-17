import React from 'react';

import NavbarLink from './NavbarLink';

// The NavbarSublink is creating navigation links with sublinks 

const NavbarSublink = ({link}) => {

    // Function that generates the sublinks for navigation links
    
    const GenerateLinks = () => {
        return link.sublinks.map(sublink => {
            return <NavbarLink link={sublink} />
        })
    }

    return (
        <li>
            {link.title} <span>+</span>
            <ul>
                {GenerateLinks()}
            </ul>
        </li>
    )
}

export default NavbarSublink;