import React from 'react';

// components
import QuoteForm from '../components/QuoteForm';

// css
import '../css/RequestQuote.css';

const RequestQuote = () => {
    return (
        <div className='request-quote'>
            <div className="request-quote-title page-title-1-xxl">
                Request a Quote
            </div>
            <QuoteForm />
        </div>
    );
};

export default RequestQuote;