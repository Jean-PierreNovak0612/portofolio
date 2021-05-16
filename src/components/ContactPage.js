import React from 'react';

import ContactForm from './ContactForm';
import Footer from './Footer';
import { SOCIAL_LINKS, FOOTER_LINKS } from '../data'

import '../css/ContactPage.css';

const ContactPage = () => {
    return (
        <main>
            <ContactForm />
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </main>
    )
}

export default ContactPage;