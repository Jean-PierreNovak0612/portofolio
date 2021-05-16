import React from 'react';

import SectionSegment from './SectionSegment';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { FOOTER_LINKS, SOCIAL_LINKS, SEGMENT1, SEGMENT2 } from '../data'

import '../css/HomePage.css';

const HomePage = () => {
    return (
        <main>
            <SectionSegment data={SEGMENT1}/>
            <SectionSegment data={SEGMENT2} />
            <ContactForm from="home" />
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </main>
    )
};

export default HomePage;