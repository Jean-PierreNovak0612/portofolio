import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../css/ContactForm.css';

const ContactForm = ({ from }) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const mainClass = from === 'home' ? 'main-page' : '';

    const sendEmail = (data) => {
        emailjs.sendForm('service_ri4oqmc', 'template_qo2p8p8', data, 'user_1UmZ4XzjHF4eiz5gzMPbv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });

        setSubject('')
        setMessage('');
        setName('');
        setEmail('');

        setSuccessMessage('success')

        setTimeout(() => {
            setSuccessMessage('');
        }, 1500)  
    }

    const validate = (e) => {
        e.preventDefault();

        if(!email) setEmailError('error')
        else setEmailError('')
        if(!name) setNameError('error')
        else setNameError('')
        if(!subject) setSubjectError('error')
        else setSubjectError('')
        if(!message) setMessageError('error')
        else setMessageError('');
        if(email === '' || name === '' || message === '' || subject === '') return null;

        sendEmail(e.target)  
    }

    return (
        <div className={`${mainClass} contact-form`}>
            <h1>Contact me!</h1>
            <form onSubmit={validate}>

                <label htmlFor="input-subject">Subject :</label>
                <input name="subject" autoComplete='off' className={subjectError} value={subject} onChange={(e) => setSubject(e.target.value)} id="input-subject" type="text" placeholder="Contact" />
                <div className={`${subjectError} message`}>You must enter a valid subject!</div>

                <label htmlFor="input-name">Full Name :</label>
                <input name="name" autoComplete='off' className={nameError} value={name} onChange={(e) => setName(e.target.value)} id="input-name" type="text" placeholder="John Doe" />
                <div className={`${nameError} message`}>You must enter a valid name!</div>

                <label htmlFor="input-email">Email :</label>
                <input name="email" autoComplete='off' className={emailError} value={email} onChange={(e) => setEmail(e.target.value)} id="input-email" type="email" placeholder="johndoe@gmail.com" />
                <div className={`${emailError} message`}>You must enter a valid email!</div>

                <label htmlFor="input-message">Message :</label>
                <textarea name="message" className={messageError} value={message} onChange={(e) => setMessage(e.target.value)} id="input-message" placeholder="Hi there!" />
                <div className={`${messageError} message`}>You must enter a valid message!</div>

                <div className={`${successMessage} message`}>Your message has been sent!</div>

                <button className="button-submit" type="submit">Submit</button>
            </form>            
        </div>
    )
}

export default ContactForm;