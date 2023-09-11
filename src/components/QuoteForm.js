import React from 'react';

// css
import '../css/QuoteForm.css';

const QuoteForm = () => {

    const countries = [ // A simple list. You might want to use a more exhaustive list in production.
        'Select Country',
        'China',
        'Japan',
        'Germany',
        'France',
        'United States',
        'Canada',
        'India',
        'Russia',
        'Other'
        //... add more countries as needed
    ];

    //... inside QuoteForm component
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "Select Country",
        address: "",
        industry: "",
        product: "",
        details: ""
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });
            if (response.ok) {
                console.log("Email sent successfully!");
            } else {
                console.log("Error sending email.");
            }
        } catch (error) {
            console.error("There was an error sending the email:", error);
        }

        // display success message
        alert("Thank you for your request! We will get back to you as soon as possible.");

        // clear form
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            country: "Select Country",
            address: "",
            industry: "",
            product: "",
            details: ""
        });


    };
    

    return (
        <form className='quote-form' onSubmit={handleSubmit}>
            <div className='quote-form-content'>
                <div className='quote-form-item'>
                    <label htmlFor="name" className="page-text-1">NAME:</label>
                    <input type="text" 
                            id="name" 
                            placeholder='Enter Your Full Name' 
                            required 
                            value={formData.name} 
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="email" className="page-text-1">EMAIL:</label>
                    <input type="email" 
                            id="email" 
                            placeholder='Enter Your Email' 
                            required 
                            value={formData.email} 
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="phone" className="page-text-1">PHONE:</label>
                    <input type="phone" 
                            id="phone" 
                            placeholder='Enter Your Phone Number' 
                            required 
                            value={formData.phone} 
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="company" className="page-text-1">COMPANY:</label>
                    <input type="text" 
                            id="company" 
                            placeholder='Enter Your Company Name' 
                            required 
                            value={formData.company} 
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="country" className="page-text-1">COUNTRY:</label>
                    <select id="country" 
                            required
                            value={formData.country} 
                            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}>
                        {countries.map(country => (
                            <option value={country} key={country}>{country}</option>
                        ))}
                    </select>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="address" className="page-text-1">ADDRESS:</label>
                    <input type="text" 
                            id="address" 
                            placeholder='Enter Your Address' 
                            required 
                            value={formData.address} 
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="industry" className="page-text-1">INDUSTRY:</label>
                    <input type="text" 
                            id="industry" 
                            placeholder='What industry are you in?' 
                            required 
                            value={formData.industry} 
                            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="product" className="page-text-1">PRODUCT:</label>
                    <input type="text" 
                            id="product" 
                            placeholder='Interested in a specific HIPPSC product?' 
                            required 
                            value={formData.product} 
                            onChange={(e) => setFormData(prev => ({ ...prev, product: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="details" className="page-text-1">RQUEST DETAILS:</label>
                    <textarea id="details" 
                              rows="4" 
                              placeholder='Tell Us About Your Needs ...' 
                              value={formData.details} 
                              onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}>

                    </textarea>
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
