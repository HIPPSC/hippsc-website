import React, { useState }from 'react';

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

    // formData inside QuoteForm component
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

    // validate form
    const validateForm = () => {
        let missing = [];
        
        if (!formData.name) missing.push("NAME");
        if (!formData.email) missing.push("EMAIL");
        if (!formData.phone) missing.push("PHONE");
        if (!formData.company) missing.push("COMPANY");
        if (formData.country === 'Select Country') missing.push("COUNTRY");
        if (!formData.industry) missing.push("INDUSTRY");

        return missing;
    };
    


    // handle form submission
    const [missingFields, setMissingFields] = useState([]); 
    const [notification, setNotification] = useState(""); 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // validate form
        const missing = validateForm();

        if (missing.length > 0) {
            setMissingFields(missing);
            return;
        }

        // send email
        try {
            const response = await fetch('https://hippsc-email-sender.vercel.app/send-email', {
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
                setNotification("Error sending email.");
                return
            }
        } catch (error) {
            console.error("There was an error sending the email:", error);
            setNotification("There was an error sending the email.");
            return
        }

        // display success message
        setNotification("Thank you for your request! We will get back to you as soon as possible.");

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
                    <label htmlFor="name" className="page-text-1">NAME: <span>*</span> </label>
                    <input type="text" 
                            id="name" 
                            placeholder='Enter Your Full Name'  
                            value={formData.name} 
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="email" className="page-text-1">EMAIL: <span>*</span> </label>
                    <input type="email" 
                            id="email" 
                            placeholder='Enter Your Email'  
                            value={formData.email} 
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="phone" className="page-text-1">PHONE: <span>*</span> </label>
                    <input type="phone" 
                            id="phone" 
                            placeholder='Enter Your Phone Number'  
                            value={formData.phone} 
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="company" className="page-text-1">COMPANY: <span>*</span> </label>
                    <input type="text" 
                            id="company" 
                            placeholder='Enter Your Company Name'  
                            value={formData.company} 
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="country" className="page-text-1">COUNTRY: <span>*</span> </label>
                    <select id="country" 
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
                            value={formData.address} 
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="industry" className="page-text-1">INDUSTRY: <span>*</span> </label>
                    <input type="text" 
                            id="industry" 
                            placeholder='What industry are you in?'  
                            value={formData.industry} 
                            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}/>
                </div>
                <div className='quote-form-item'>
                    <label htmlFor="product" className="page-text-1">PRODUCT: </label>
                    <input type="text" 
                            id="product" 
                            placeholder='Interested in a specific HIPPSC product?' 
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

            <div className='quote-form-alert'>
                {/* You can style this div to make the alert more visually appealing */}
                {missingFields.length > 0 && `Please fill out the following fields: ${missingFields.join(', ')}`}
            </div>
            <div className="quote-form-notification">
                {notification}
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
