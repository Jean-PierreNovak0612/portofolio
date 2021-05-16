import React, { useState } from 'react';

import SectionSegment from './SectionSegment'

import '../css/ListItem.css';

const ListItem = ({ item }) => {

    const [active, setActive] = useState(item.active)

    return (
        <div className="list-item">
            <input type="checkbox" id={item.id} checked={active} onChange={() => {return}} />
            <label htmlFor={item.id} onClick={() => setActive(!active)}><h1>{item.title}</h1></label>
            <div className={item.className}>
                <SectionSegment data={item.data} />
            </div>
        </div>
    )
};

export default ListItem;