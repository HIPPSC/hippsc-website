import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 


// css & assets
import '../css/RequestContact.css';
import { BsArrowRight } from 'react-icons/bs';


const RequestContact = () => {

    // typing effects
    const request_title_text = "Request Sample";
    const [requestTitle, invisibleRequestTitle, requestTitleref] = useTypingEffect(request_title_text, 1, 50);


    return (
        <div className='request-contact'>
            <div className="request-contact-title page-title-1" ref={requestTitleref}>
                <span >{requestTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleRequestTitle}</span>
            </div>
            <div className="request-contact-btn-container">
                <div className="request-contact-btn rectangle-btn">
                    Get Started
                    <BsArrowRight className='rectangle-btn-icon' />
                </div>
            </div>
        </div>
    );
};

export default RequestContact;