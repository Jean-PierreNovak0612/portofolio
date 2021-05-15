import React from 'react';
import { Link } from 'react-router-dom';

import '../css/SectionSegment.css';

const SectionSegment = ({ data }) => {

    const imageClass = data.imagePosition === 'left' ? "image-left" : "image-right";
    const contentClass = data.imagePosition === 'left' ? "content-left" : "content-right";

    const renderButton = () => {
        if(!data.link || !data.buttonText) return null;
        return (
            <Link to={data.link} className="button-slide">{data.buttonText}</Link>
        )
    }

    const renderContent = () => {
        if(!data.text || !data.title) return null;
        return (
            <div className={`${contentClass} content`}>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                {renderButton()}
            </div>
        )
    }

    const renderImage = () => {
        if(!data.imageUrl) return null;
        return (
            <div className={`${imageClass} image`} style={{ backgroundImage: `url(${data.imageUrl})`}}>
            </div>
        )
    }

    return (
        <section className="section-segment">
            {renderImage()}
            {renderContent()}
        </section>
    )
};

export default SectionSegment;