import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

// components
import RequestContact from '../components/RequestContact';

// css & assets
import '../css/Contact.css';
import contactBanner from '../assets/contact-banner.jpg';

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

    const [contacTitle, invisibleContactTitle, contactTitleref] = useTypingEffect(contact_title_text, 1, 30);
    const [locationAPTitle, invisibleLocationAPTitle, locationAPTitleref] = useTypingEffect(location_ap_title_text, 1, 30);
    const [locationNATitle, invisibleLocationNATitle, locationNATitleref] = useTypingEffect(location_na_title_text, 1, 30);

    
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
            <div className="contact-locations">
                <div className="contact-locations-title page-title-1-xl" ref={locationAPTitleref}>
                    <span >{locationAPTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLocationAPTitle}</span>
                </div>
                <div className="contact-locations-list">
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            DONGGUAN, CHN (*HQ)
                        </div>
                        {/* <div className="contact-locations-list-item-address">
                            <div>Floor 7, Building 1, No. 13 </div>
                            <div>Xinchun Road, Shangsha, Changan Town</div>
                            <div>Dongguan, Guangdong</div>
                        </div> */}
                        <div className="contact-locations-list-item-name">
                            Kevin Ye
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(86) 136-002-58263</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                kevin@hippsc.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            SHANGHAI, CHN
                        </div>
                        {/* <div className="contact-locations-list-item-address">
                            <div>Building 19, Linda Park</div>
                            <div>No. 8 Dongjing Road</div>
                            <div>Songjiang Industrial Zone</div>
                            <div>Shanghai</div>
                        </div> */}
                        <div className="contact-locations-list-item-name">
                            Xi Zhang
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(86) 136-818-39601</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                zx@hippsc.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            SHENZHEN, CHN
                        </div>
                        {/* <div className="contact-locations-list-item-address">
                            <div>No. B06</div>
                            <div>Shangliao Hardware Mold City</div>
                            <div>Shajing, Shenzhen</div>
                            <div>Guangdong</div>
                        </div> */}
                        <div className="contact-locations-list-item-name">
                            Xiaohua Ye
                        </div>
                        <div className="contact-locations-list-item-phone">
                            <span>(86) 138-027-02608</span>
                        </div>
                        <div className="contact-locations-list-item-email">
                            <a href="mailto:">
                                yxh@hippsc.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-locations-title page-title-1-xl" ref={locationNATitleref}>
                    <span >{locationNATitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLocationNATitle}</span>
                </div>
                <div className="contact-locations-list">
                    <div className="contact-locations-list-item">
                        <div className="contact-locations-list-item-title page-text-2">
                            LOS ANGELES, CA
                        </div>
                        <div className="contact-locations-list-item-name">
                            Kaisen Ye
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
                            HOUSTON, TX
                        </div>
                        <div className="contact-locations-list-item-name">
                            Jihao Ye
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
            </div>
            
            <RequestContact />
        </div>
        
    );
};

export default Contact;