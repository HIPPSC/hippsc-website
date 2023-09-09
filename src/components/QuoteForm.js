import React from 'react';

// css
import '../css/QuoteForm.css';

const QuoteForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission goes here
    };

    return (
        <form className='quote-form' onSubmit={handleSubmit}>
            <div className='quote-form-content'>
                <div className='quote-form-item'>
                    <label htmlFor="name" className="page-text-1">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="email" className="page-text-1">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="details" className="page-text-1">Project Details:</label>
                    <textarea id="details" rows="4" required></textarea>
                </div>
            </div>
            <div className='quote-form-btn'>
                <button type="submit" className="rectangle-btn">
                    Submit <span className="rectangle-btn-icon">→</span>
                </button>
            </div>
        </form>
    );
};

export default QuoteForm;
