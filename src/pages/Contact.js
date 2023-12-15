import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

// components
import RequestContact from '../components/RequestContact';

// css & assets
import '../css/Contact.css';
import contactBanner from '../assets/contact-banner.webp';

//multilangual
import { useTranslation } from 'react-i18next';

const Contact = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const contact_title_text = t("contact.C");
    const location_ap_title_text = t("contact.A");
    const location_na_title_text = t("contact.N");
    const location_eu_title_text = t("contact.E");

    const [contacTitle, invisibleContactTitle, contactTitleref] = useTypingEffect(contact_title_text, 1, 30);
    const [locationAPTitle, invisibleLocationAPTitle, locationAPTitleref] = useTypingEffect(location_ap_title_text, 1, 30);
    const [locationNATitle, invisibleLocationNATitle, locationNATitleref] = useTypingEffect(location_na_title_text, 1, 30);
    const [locationEUTitle, invisibleLocationEUTitle, locationEUTitleref] = useTypingEffect(location_eu_title_text, 1, 30);


    // location list
    const locations = [
        {
            cityKey: "HQ",
            phone: "(86) 136-002-58263",
            email: "kevin@hippsc.com",
        },
        {
            cityKey: "HQ2",
            phone: "(86) 159-899-41765",
            email: "sales5@hippsc.com",
        },
        {
            cityKey: "DGCA",
            phone: "(86) 158-128-59138",
            email: "yelin@hippsc.com"
        },
        {
            cityKey: "DGDC",
            phone: "(86) 185-881-19606",
            email: "N/A"
        },
        {
            cityKey: "SH",
            phone: "(86) 136-818-39601",
            email: "zhangxi@hippsc.com",
        },
        {
            cityKey: "HZ",
            phone: "(86) 137-119-88862",
            email: "wangquan@hippsc.com",
        },
        {
            cityKey: "SZ",
            phone: "(86) 138-027-02608",
            email: "mikecnc@163.com",
        },
        {
            cityKey: "ZS",
            phone: "(86) 137-119-02558",
            email: "lhg@hippsc.com",
        },
        {
            cityKey: "ZJTZ",
            phone: "(86) 152-569-88271",
            email: "N/A",
        },
        {
            cityKey: "ZJJS",
            phone: "(86) 135-645-39879",
            email: "N/A",
        },
        {
            cityKey: "JSGS",
            phone: "(86) 189-526-81780",
            email: "N/A",
        },
    ];


    
    return (
        <div className='contact'>
            <div className="contact-header">
                <div className="contact-title page-title-1-xxl" ref={contactTitleref}>
                    <span >{contacTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleContactTitle}</span>
                </div>
                <div className="contact-banner banner-image">
                    <img src={contactBanner} alt="contact-banner" />
                </div>
            </div>

            {/* Asia and Pacific */}
            <div className="contact-locations">
                <div className="contact-locations-title page-title-1-xl" ref={locationAPTitleref}>
                    <span >{locationAPTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLocationAPTitle}</span>
                </div>
                <div className="contact-locations-list">
                    {locations.map((location) => (
                        <div className="contact-locations-list-item" key={location.cityKey}>
                            <div className="contact-locations-list-item-title page-text-2">
                                {t(`contact.cities.${location.cityKey}`)}
                            </div>
                            <div className="contact-locations-list-item-name">
                                {t(`contact.names.${location.cityKey}`)}
                            </div>
                            <div className="contact-locations-list-item-phone">
                                <span>{location.phone}</span>
                            </div>
                            <div className="contact-locations-list-item-email">
                                <a href={`mailto:${location.email}`}>
                                {location.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* North America */}
                <div className="contact-locations-title page-title-1-xl" ref={locationNATitleref}>
                    <span >{locationNATitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLocationNATitle}</span>
                </div>
                <div className="contact-locations-list">
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            {t("contact.cities.LA")}
                        </div>
                        <div className="contact-locations-list-item-name">
                            {t("contact.names.LA")}
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(1) 346-368-1097</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                kaisen@hippsc.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            {t("contact.cities.HOU")}
                        </div>
                        <div className="contact-locations-list-item-name">
                            {t("contact.names.HOU")}
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(1) 832-996-7496</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                jihao@hippsc.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Europe */}
                <div className="contact-locations-title page-title-1-xl" ref={locationEUTitleref}>
                    <span >{locationEUTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLocationEUTitle}</span>
                </div>
                <div className="contact-locations-list">
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            {t("contact.cities.EU")}
                        </div>
                        <div className="contact-locations-list-item-name">
                            {t("contact.names.EU")}
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(86) 138-292-05323</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                sales1@hippsc.com
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
            <RequestContact />
        </div>
        
    );
};

export default Contact;