import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// css
import '../../css/services/Service.css';

// import holderIcon from '../../assets/svg/icon-3holders.svg';
// import machinesIcon from '../../assets/svg/icon-machines.svg';
// import customerServiceIcon from '../../assets/svg/icon-customer-service.svg';
import openBoxIcon from '../../assets/svg/icon-open-box.svg';
import videoIcon from '../../assets/svg/icon-video.svg';

//multilangual
import { useTranslation } from 'react-i18next';

const Service = () => {
    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");


    return (
        <Container className='service'>
            {/* service header */}
            <div className="service-header">
                <div className="service-title">
                    {t("services.title")}
                </div>
                <div className="service-sub-title">
                    {/* HIPPSC offers a range of services to 
                    support our tooling solutions, 
                    from help choosing the right holder and machine to 
                    installation and training. */}
                    {t("services.subtitle")}
                </div>
            </div>

            {/* service body */}
            <Row className="service-body">
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <Link className='service-link' to='/service/get_started'>
                        <div className="service-body-card-pic">
                            <img src={openBoxIcon}
                                alt="machines-icon" />
                        </div>
                        <div className="service-body-card-title">
                            {t("services.body_title1")}
                        </div>
                    </Link>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <a className='service-link'
                        href="https://www.youtube.com/@HIPPSC" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <div className="service-body-card-pic">
                            <img src={videoIcon}
                                alt="holder-reconditioning" />
                        </div>
                        <div className="service-body-card-title">
                            {t("services.body_title2")}
                        </div>
                    </a>
                </Col>
                {/* <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-pic">
                        <img src={orderIcon}
                            alt="machines-icon" />
                    </div>
                    <div className="service-body-card-title">
                        Your Orders
                    </div>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-pic">
                        <img src={holderIcon}
                            alt="holder-reconditioning" />
                    </div>
                    <div className="service-body-card-title">
                        Holder Reconditioning
                    </div>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-pic">
                        <img src={machinesIcon}
                            alt="machines-icon" />
                    </div>
                    <div className="service-body-card-title">
                        Machine Maintainance
                    </div>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-pic">
                        <img src={customerServiceIcon}
                            alt="machines-icon" />
                    </div>
                    <div className="service-body-card-title">
                        Frequently Asked Questions
                    </div>
                </Col> */}
                
            </Row>
        </Container>
    );
};

export default Service;