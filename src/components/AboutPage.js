import React, { useRef } from 'react';

import SectionSegment from './SectionSegment';
import Footer from './Footer'
import { SOCIAL_LINKS, FOOTER_LINKS } from '../data'

import '../css/AboutPage.css';

const AboutPage = ({ contents }) => {

    const me = useRef();
    const school = useRef();
    const webdev = useRef();

    const scrollToElement = (component) => {
        component.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const renderArticle = () => {
        if(!contents) return null;
        return contents.map(content => {
            if(content.ref === "me") {
                return (
                    <section key={content.ref} ref={me} className="article">
                        <h1>{content.title}</h1>
                        <SectionSegment data={content.content} />
                        <section>
                            <button className="button-fill" onClick={() => scrollToElement(me.current)}>Go back to top of the article</button>
                            <button className="button-close" onClick={scrollToTop}>Go back to the top</button>
                        </section>
                    </section>
                )
            }
            if(content.ref === "school") {
                return (
                    <section key={content.ref} ref={school} className="article">
                        <h1>{content.title}</h1>
                        <SectionSegment data={content.content} />
                        <section>
                            <button className="button-fill" onClick={() => scrollToElement(school.current)}>Go back to top of the article</button>
                            <button className="button-close" onClick={scrollToTop}>Go back to the top</button>
                        </section>
                    </section>
                )
            }
            return (
                <section key={content.ref} ref={webdev} className="article">
                    <h1>{content.title}</h1>
                    <SectionSegment data={content.content} />
                    <section>
                            <button className="button-fill" onClick={() => scrollToElement(webdev.current)}>Go back to top of the article</button>
                            <button className="button-close" onClick={scrollToTop}>Go back to the top</button>
                        </section>
                </section>
            )
        })
    } 

    return (
        <main>
            <label className="read-list"><h2>Read About</h2></label>
            <ul className="read-list-items">
                <li>
                    <label onClick={() => scrollToElement(me.current)} ><h2>Who am I?</h2></label>
                </li>
                <li>
                    <label htmlFor="school" onClick={() => scrollToElement(school.current)} ><h2>Education</h2></label>
                </li>
                <li>
                    <label htmlFor="webdev" onClick={() => scrollToElement(webdev.current)} ><h2>How it came to be</h2></label>
                </li>
            </ul>
            {renderArticle()}
            <Footer social={SOCIAL_LINKS} links={FOOTER_LINKS} />
        </main>
    )
};

export default AboutPage;