import React from 'react';
import { Link } from 'react-router-dom';

import '../css/SectionSegment.css';

const SectionSegment = ({ title, text, image, imagePosition = "left", link, buttonText }) => {

    const imageClass = imagePosition === 'left' ? "image-left" : "image-right";
    const contentClass = imagePosition === 'left' ? "content-left" : "content-right";

    const renderButton = () => {
        if(!link || !buttonText) return null;
        return (
            <Link to={link} className="button-slide">{buttonText}</Link>
        )
    }

    const renderContent = () => {
        if(!text || !title) return null;
        return (
            <div className={`${contentClass} content`}>
                <h2>{title}</h2>
                <p>{text}</p>
                {renderButton()}
            </div>
        )
    }

    const renderImage = () => {
        if(!image) return null;
        return (
            <div className={`${imageClass} image`} style={{ backgroundImage: `url(${image})`}}>
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