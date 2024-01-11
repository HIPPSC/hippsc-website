import React from 'react';
import { Helmet } from 'react-helmet';
import useTypingEffect from '../hooks/useTypingEffect';


// components
import QuoteForm from '../components/QuoteForm';

// css
import '../css/RequestQuote.css';

//multilangual
import { useTranslation } from 'react-i18next';

const RequestQuote = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");

    // typing effect
    const request_quote_title_text = t("quote.request");
    const [requestQuoteTitle, invisibleRequestQuoteTitle, requestQuoteTitleref] = useTypingEffect(request_quote_title_text, 1, 30);
    
    return (
        <div className='request-quote'>
            {/* metadata */}
            <Helmet>
                <title>Request a Quote</title>
                <meta 
                    name="description" 
                    content="
                    We craft industry-leading shrink-fit holders and 
                    machines that enable machine shops to achieve unparalleled 
                    accuracy and efficiency — across diverse industrial applications." 
                />
                <meta name="keywords" content="shrink-fit, tool holders, cnc machining" />
            </Helmet>

            {/* Quote Form */}
            <div className="request-quote-title page-title-1-xxl" ref={requestQuoteTitleref}>
                <span >{requestQuoteTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleRequestQuoteTitle}</span>
            </div>
            <QuoteForm />
        </div>
    );
};

export default RequestQuote;