import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// css
import '../css/Service.css';
import { LiaToolsSolid}  from 'react-icons/lia';

const Service = () => {
    return (
        <Container className='service'>
            {/* service header */}
            <div className="service-header">
                <div className="service-title">
                    HIPPSC Services & Support
                </div>
                <div className="service-sub-title">
                    HIPPSC offers a range of services to 
                    support our tooling solutions, 
                    from help choosing the right holder and machine to 
                    installation and training.
                </div>
            </div>

            {/* service body */}
            <Row className="service-body">
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-icon">
                        <LiaToolsSolid />
                    </div>
                    <div className="service-body-card-title">
                        Technical Support
                    </div>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-icon">
                        <LiaToolsSolid />
                    </div>
                    <div className="service-body-card-title">
                        Technical Support
                    </div>
                </Col>
                <Col className="service-body-card" sm='6' md='4' lg='3'>
                    <div className="service-body-card-icon">
                        <LiaToolsSolid />
                    </div>
                    <div className="service-body-card-title">
                        Technical Support
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;