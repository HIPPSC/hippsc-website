import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// css
import '../../css/services/ServiceGetStarted.css';

const ServiceGetStarted = () => {
    return (
        <div className='service-gs'>
            <div className="service-gs-header">
                <div className="service-gs-title">
                    Welcome to  
                    <span className='service-gs-title-green'>
                        HIPPSC
                    </span>
                </div>
                <div className="service-gs-sub-title">
                    {/* HIPPSC offers a range of services to 
                    support our tooling solutions, 
                    from help choosing the right holder and machine to 
                    installation and training. */}
                    Let's Get You Set Up
                </div>
            </div>

            <Container className="service-gs-body">

                <div className="service-gs-section-title page-title-3 half-border">
                    What is Shrink Fit Holder?
                </div>
                <Row className='service-gs-section'>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Heating
                        </div>
                        <div className="service-gs-card-description">
                            The tool holder's bore is heated, causing it to expand;
                            thus allowing the tool to be inserted.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Insertion
                        </div>
                        <div className="service-gs-card-description">
                            While expanded, the cutting tool or drill bit is inserted into the holder.
                            The expanding time is about 8 - 16 seconds.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Cooling
                        </div>
                        <div className="service-gs-card-description">
                            As the holder cools down, it contracts, tightly gripping the tool without any mechanical fasteners.
                        </div>
                    </Col>
                </Row>

                <div className="service-gs-section-title page-title-3 half-border">
                    Key Advantages
                </div>
                <Row className='service-gs-section'>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            High Clamping Force
                        </div>
                        <div className="service-gs-card-description">
                            Ensures the tool is held securely.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Excellent Balance and Accuracy
                        </div>
                        <div className="service-gs-card-description">
                            Minimizes vibration, leading to better surface finishes and extended tool life.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Slim Design
                        </div>
                        <div className="service-gs-card-description">
                            Allows for better access in tight spaces during machining.
                        </div>
                    </Col>
                </Row>

                <div className="service-gs-section-title page-title-3 half-border">
                    Why Shrink Fit Holder?
                </div>
                <Row className='service-gs-section'>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Improved Tool Life
                        </div>
                        <div className="service-gs-card-description">
                            Reduced vibration means less wear and tear on your tools.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Enhanced Surface Finish
                        </div>
                        <div className="service-gs-card-description">
                            Achieve smoother finishes due to minimized run-out.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='4' lg='4'>
                        <div className="service-gs-card-title">
                            Faster Tool Changes
                        </div>
                        <div className="service-gs-card-description">
                            Reducing tool change time can significantly boost productivity.
                        </div>
                    </Col>
                </Row>

                <div className="service-gs-section-title page-title-3 half-border">
                    Picking the Right Shrink Fit Holder
                </div>
                <Row className='service-gs-section'>
                    <Col className="service-gs-card" sm='6' md='6' lg='4'>
                        <div className="service-gs-card-title">
                            Tool Size
                        </div>
                        <div className="service-gs-card-description">
                            Ensure the holder is compatible with the diameter of the tool you intend to use.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='6' lg='4'>
                        <div className="service-gs-card-title">
                            Material
                        </div>
                        <div className="service-gs-card-description">
                            Different materials (like steel or aluminum) offer varied levels of thermal expansion. 
                            Choose according to your specific needs.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='6' lg='4'>
                        <div className="service-gs-card-title">
                            Taper Type
                        </div>
                        <div className="service-gs-card-description">
                            Depending on your machine spindle, pick the appropriate taper type (e.g., CAT, BT, HSK).
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='6' lg='4'>
                        <div className="service-gs-card-title">
                            Coolant Channels
                        </div>
                        <div className="service-gs-card-description">
                            If your machining process uses coolant, ensure the holder supports it.
                        </div>
                    </Col>
                    <Col className="service-gs-card" sm='6' md='6' lg='4'>
                        <div className="service-gs-card-title">
                            Balance Grade
                        </div>
                        <div className="service-gs-card-description">
                            For high-speed machining, choose a holder with a higher balance grade.
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default ServiceGetStarted;