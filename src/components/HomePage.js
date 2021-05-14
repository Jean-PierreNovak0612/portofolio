import React from 'react';

import SectionSegment from './SectionSegment';
import Footer from './Footer';
import { IMAGE1_URL, TITLE1, FOOTER_LINKS, SOCIAL_LINKS, TEXT1 } from '../data'

import '../css/HomePage.css';

const HomePage = () => {
    return (
        <main>
            <SectionSegment image={IMAGE1_URL} title={TITLE1} text={TEXT1} link="/projects" buttonText="Go check it" />
            <SectionSegment image={IMAGE1_URL} title={TITLE1} text={TEXT1} link="/projects" imagePosition="right" buttonText="Go check it" />
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </main>
    )
};

export default HomePage;