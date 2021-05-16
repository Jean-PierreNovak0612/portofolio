import React from 'react';

import ListItem from './ListItem';
import Footer from './Footer';
import { SOCIAL_LINKS, FOOTER_LINKS } from '../data'

import '../css/ProjectList.css'

const ProjectList = ({ listItems }) => {

    const renderListItem = () => {
        if(!listItems) return null;
        return listItems.map(listItem =>{
            return (
                <ListItem item={listItem} key={listItem.id} />
            )
        })
    }

    return (
        <main>
            <div className="listItems">
                {renderListItem()}
            </div>
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </main>
    )
}

export default ProjectList;