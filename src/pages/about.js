import React from 'react';
import BG1 from '../images/backgrounds/sean-pollock-PhYq704ffdA-unsplash.jpg'; 
import BG2 from '../images/backgrounds/daniel-chen-cNaEqXSsZ0k-unsplash.jpg';
import {connect} from 'react-redux';
import FadeInContainer,{FadeInFromRight, FadeInFromLeft, FadeInFromBottom, RevealCountingAnimation, RevealFadeAnimation} from '../components/utils/fadeInAnimation';
import {Container, Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';





const AboutPage = (props)=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return(
        <Container fluid style={{padding: 0, backgroundColor: 'black'}}>
            <Container fluid style={{backgroundImage:`url(${BG1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', padding: 0, margin:0}}>
                <Row style={{margin:0, padding:0}}><div className="about-overlay"></div></Row>
                <RevealFadeAnimation>
                    <div style={{color:'#f5ca9f',zIndex:3, textAlign:'center',paddingTop: isMobile?'50%':'20%', fontSize: '60px'}} className="about-title">About us</div>
                </RevealFadeAnimation>
            </Container>
            
            <FadeInContainer FadeIn={FadeInFromBottom}>
                <Col style={{marginTop: '100px'}} className="content-main">
                    <Row><div className="about-title">Who we Are</div></Row>
                    <div className="about-line"></div>
                    <Row>
                        <div style={{color: 'white'}} className="about-description">
                            Ayushman Architects is an architecture, interior design, and planning firm that practices nationally from our Offie in Kerala. 
                            We have made a lasting impact on the nation’s skyline, campuses, and neighborhoods, helping our clients across the country achieve their goals, serve their constituencies, and make their mark.
                        </div>
                    </Row>
                </Col>
            </FadeInContainer>

            
            <Row xs={1} md={2} style={{margin: '10% 0 10% 0', backgroundColor: 'black'}}>
                <Col>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <Container fluid style={{backgroundImage: `url(${BG2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 500, marginTop: '16px'}}></Container>
                    </FadeInContainer>
                </Col>

                <Col style={{marginTop:'12px'}}>
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <Row>
                            <div style={{fontSize: '16px', textAlign: 'center', fontWeight: '600', color:'black'}} className="about-small-title">Our Design Principles</div>
                            <div className="about-line"></div>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">Interpret</div>
                                <div className="about-dash"></div>
                            </Col>
    
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">Every project begins with a conversation. We work closely with our clients to understand their goals and interpret their vision.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">Envision</div>
                                <div className="about-dash"></div>
                            </Col>
                            
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">Our designs combine artistic expression with technical rigor, integrating sustainability and vision to create solutions that uniquely suit our clients’ needs.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">Execute</div>
                                <div className="about-dash"></div>
                            </Col>
                            
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">A project isn’t successful until it’s delivered successfully. Our team has developed a strong reputation for seamless project management that ensures projects are delivered on time and on budget.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">Inspire</div>
                                <div className="about-dash"></div>
                            </Col>
                            
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">Real design solutions inspire. SCB’s work is tangible, and our projects strive to make positive contributions to people’s lives and the urban fabric.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <Row style={{margin:'60px 0 0 0'}}>
                        <div style={{width: '80%'}} className="about-line"></div>
                    </Row>
                    
                </Col>
            </Row>

            <Row md={4} xs={1} style={{paddingBottom: '100px', marginRight: 0}}>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation>
                            <div style={{color: 'white'}} className="about-small-title">2</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">OFFICES</div></Row>
                    <Row xs={1} style={{margin:0}}>
                        <div style={{fontSize: '16px', fontWeight: '900'}} className="about-small-title">Kerala</div>
                        <div style={{fontSize: '16px', fontWeight: '900', marginTop: '3px'}} className="about-small-title">Maharashtra</div>
                    </Row>
                </Col>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={"+"}>
                            <div style={{color: 'white'}} className="about-small-title">100</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">CLIENTS</div></Row>
                    <Row xs={1} style={{margin:0}}>
                        <div style={{fontSize: '16px', fontWeight: '900'}} className="about-small-title">Across India</div>
                    </Row>
                </Col>


                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={'+'}>
                            <div style={{color: 'white'}} className="about-small-title">65</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">MEMBERS</div></Row>
                    <Row xs={1} style={{margin:0}}>
                        <div style={{fontSize: '16px', fontWeight: '900'}} className="about-small-title">Engineers</div>
                        <div style={{fontSize: '16px', fontWeight: '900', marginTop: '3px'}} className="about-small-title">Designers</div>
                        <div style={{fontSize: '16px', fontWeight: '900', marginTop: '3px'}} className="about-small-title">Other Professionals</div>
                    </Row>
                </Col>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={'+'}>
                            <div style={{color: 'white'}} className="about-small-title">80</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">PROJECTS</div></Row>
                    <Row xs={1} style={{margin:0}}><div style={{fontSize: '16px', fontWeight: '900'}} className="about-small-title">India</div></Row>
                </Col>

                
            </Row>
        
        </Container>
    );
}


export default connect()(AboutPage);