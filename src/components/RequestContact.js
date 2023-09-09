import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 
import { Link } from 'react-router-dom';


// css & assets
import '../css/RequestContact.css';
import { BsArrowRight } from 'react-icons/bs';


const RequestContact = () => {

    // typing effects
    const request_title_text = "Request a Quote";
    const [requestTitle, invisibleRequestTitle, requestTitleref] = useTypingEffect(request_title_text, 1, 50);


    return (
        <div className='request-contact'>
            <div className="request-contact-title page-title-1" ref={requestTitleref}>
                <span >{requestTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleRequestTitle}</span>
            </div>
            <div className="request-contact-btn-container">
                <Link to="/request_quote" className="request-contact-btn rectangle-btn">
                    Get Started
                    <BsArrowRight className='rectangle-btn-icon' />
                </Link>
            </div>
        </div>
    );
};

export default RequestContact;