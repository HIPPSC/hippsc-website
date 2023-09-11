import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';


// components
import QuoteForm from '../components/QuoteForm';

// css
import '../css/RequestQuote.css';

const RequestQuote = () => {

    // typing effect
    const request_quote_title_text = "Request a Quote";
    const [requestQuoteTitle, invisibleRequestQuoteTitle, requestQuoteTitleref] = useTypingEffect(request_quote_title_text, 1, 30);
    
    return (
        <div className='request-quote'>
            <div className="request-quote-title page-title-1-xxl" ref={requestQuoteTitleref}>
                <span >{requestQuoteTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleRequestQuoteTitle}</span>
            </div>
            <QuoteForm />
        </div>
    );
};

export default RequestQuote;