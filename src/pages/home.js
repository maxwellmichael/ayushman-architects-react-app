import React, {useEffect, useState} from 'react';
import { useTransition, animated, config } from 'react-spring'
import {Image, Col, Row, Container} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Building1 from '../images/backgrounds/daniel-chen-cNaEqXSsZ0k-unsplash.jpg';
import image1 from '../images/backgrounds/architecture_bg2.jpg';
import image2 from '../images/backgrounds/lucas-franco-aRTjFXs6HNc-unsplash.jpg';
import Building2 from '../images/backgrounds/sean-pollock-PhYq704ffdA-unsplash.jpg';

import Slide3 from '../images/backgrounds/mobile/slide1.jpg';
import Slide2 from '../images/backgrounds/mobile/slide2.jpg';
import Slide1 from '../images/backgrounds/mobile/slide3.jpg';
import Slide4 from '../images/backgrounds/mobile/slide4.jpg';



import Building from '../images/backgrounds/building.jpg';
import ArchitectureBG from '../images/backgrounds/4.-STRANY-PERSIDSKOGO-ZALIVA-CHastnaya-rezidentsiya-CITADEL-GULF-COUNTRIES-Private-residence-CITADEL.webp';
import ConstructionBG from '../images/backgrounds/construction.jfif';
import ProjectPlanningBG from '../images/backgrounds/project-planning.jpg';
import EstimationBG from '../images/backgrounds/estimation.jpg';
import InteriorBG from '../images/backgrounds/interior_bg.jpg';


import FadeInContainer, {FadeInFromLeft, FadeInFromRight, FadeInFromBottom, FadeInFromTop, RevealFadeAnimation} from '../components/utils/fadeInAnimation';

const Home = (props)=>{

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const slides = [
        { id: 0, url: isMobile?Slide1:Building1, content: 'Slide 1' },
        { id: 1, url: isMobile?Slide2:Building2, content: 'Slide 2' },
        { id: 2, url: isMobile?Slide3:image1, content: 'Slide 3' },
        { id: 3, url: isMobile?Slide4:image2, content: 'Slide 4' },
      ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    useEffect(() =>{ 
        const sliderInterval = setInterval(() => set(state => (state + 1) % 4), 4000)

        return () => {
            clearInterval(sliderInterval)
          }
    }, [index])


    return(
        <Container fluid style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>
            <Helmet>
                <title>Ayushman Architects</title>
                <meta name="description" content="Home, Ayushman Architects, Architecture design, Interior design, Product design And Construction, Architecture, Interior, Project, Architecture Tools, ayushmanarchitects, AyushmanArchitects, AYUSHMANARCHITECTS, AYUSHMAN, ARCHITECTS, indian architects, best architects, architects in india, interiors, interior
                construction, project estimation, project planning, planning, PLANNING, Planning, Estimation, Estimation, PROJECT ESTIMATION, PROJECTESTIMATION, projectestimation, interiordesigns, interiors for home, homeinteriors, architecturedesigns, architectures, architecture companies, architecture designs, architecture planning, architecture and interior designs
                Interiors for home, interior for my home, best architecture companies" />
            </Helmet>
            <Row style={{width: '100%', height: '100vh', overflow: 'hidden', margin:0, padding:0, position: 'relative'}}>
                {transitions.map(({item, props, key})=>(
                    <animated.div key={key} style={{...props, position: 'absolute', backgroundImage: `url(${item.url})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', width: '100%', margin: 0, paddingRight: 0, overflow: 'hidden'}}>
                        <Row md={1} style={{width: '100%', height: '100%', marginRight:0, marginLeft:0, padding:0}}>
                            <div style={{color:'#f5ca9f', zIndex: '3', paddingTop: isMobile?'50%':'20%', fontSize: '60px'}} className="home-title">Ayushman Architects</div>
                            <div style={{width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle, hsla(240, 100%, 0%, 0.7) 41%, hsla(0, 0%, 0%, 0.4) 96%)', opacity: 0.6, margin:0}} className="home-overlay"></div>
                        </Row>
                    </animated.div>
                ))}
             </Row>

            <Row md={2} xs={1} style={{margin: '100px 0px 0px 0px', padding: 0}} >
                <Col md={{span: 6, order: 0}} xs={{span: 12, order: 0}} style={{margin: `${isMobile?20:80} 0 0 0`}}>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <div style={{textAlign: 'left', fontSize: isMobile?'40px':'60px', paddingLeft: isMobile?'10%':'auto'}} className="home-title">
                            We shape what’s beyond
                        </div>
                   
                        <div style={{textAlign:'left', paddingLeft: isMobile?38.09:18, paddingBottom: isMobile?100:'auto', color:'white'}} className="home-description">
                            Architecture is a process of imagination and discovery. Applying our creativity, experience, values, and high standards of design, quality and sustainability, 
                            our team of architects and extended network of consultants approach each project with flexibility and enthusiasm for the unique progression of each one-of-a-kind project. 
                        </div>
                    </FadeInContainer>
                </Col>

                <Col sm={{span:3}} xs={{span: 12, order: 1, offset:0}} style={{height: 500, marginBottom: isMobile?0:'20px', padding:0}}>
                    <Image alt="Architecture Image" className='home-image' src={Building} />
                </Col>
                
            </Row>

            <Row style={{margin:'100px 0 100px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:'60px', margin:'auto'}} className="home-title">What we Do</div>
                </RevealFadeAnimation>
            </Row>

            <Row md={3} xs={2} style={{backgroundColor:'black', width: '100%', height: 'auto', margin: '0px 0px 0px 0px', paddingBottom: '40px'}}>
                <Col md={1} xs={1} >
                    <div style={{height: '80%', backgroundColor: '#ba9774', marginLeft: '80%'}} className="home-line-inverted"></div>   
                </Col>
                <Col md={{span:5, order:1}} xs={{span:8, order:0}} style={{marginTop: '4%', marginLeft:'20px'}} >
                    <FadeInContainer FadeIn={FadeInFromTop}>
                        <Row style={{marginBottom: '8%'}}>
                            <div style={{textAlign: 'right', color: '#ba9774', fontSize: '20px', paddingBottom:0, paddingLeft:0, letterSpacing: '0.1em'}} className="home-description">SERVICES</div>
                            <div style={{width: '100%', marginTop:0}} className="home-line"></div>
                        </Row>
                    </FadeInContainer>
                    <Row md={{span: 1, offset: 2}}>
                        <Col style={{marginLeft: `${isMobile?0:60}px`}}>
                            <FadeInContainer FadeIn={FadeInFromRight}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">, architecture planning, architecture and interior designs
                                Interiors for home, interior for my home, best architecture companies</div>
                            </FadeInContainer>
                            <FadeInContainer FadeIn={FadeInFromLeft}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Interior Designs</div>
                            </FadeInContainer>
                            <FadeInContainer FadeIn={FadeInFromRight}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Construction</div>
                            </FadeInContainer>
                            <FadeInContainer FadeIn={FadeInFromLeft}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Project Planning</div>
                            </FadeInContainer>
                            <FadeInContainer FadeIn={FadeInFromRight}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Project Estimation</div>
                            </FadeInContainer>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '80px', marginLeft: isMobile?0:'60%'}}>
                        <button onClick={()=>{props.history.push('/projects')}} className='home-button'>View Projects</button>
                    </Row>
                </Col>
                <Col md={{span:5, order:0}} xs={{span:12, order:1}} style={{padding: 0}}>
                    <Image alt="Architecture Building" className="home-image" style={{height: '400px', marginTop: '4%'}} src={Building2} />
                </Col>
            </Row>

            <Row style={{margin:'100px 0 100px 0', padding:0}}>
                <FadeInContainer FadeIn={FadeInFromBottom}>
                    <div style={{fontSize:isMobile?'22px':'26px',textAlign:'center',color:'#f5ca9f'}} className="home-description">
                        We believe that well designed spaces encourage joy and connectivity between people. We design by exploring, investigating and testing which creates meaningful spaces to live, work and play.
                    </div>
                </FadeInContainer>
            </Row>
            
            <Row md={2} xs={1} style={{margin: '0 0 100px 0', padding:0}}>
                <Col md={6} xs={12} style={{padding:isMobile?0:'100px 0 100px 0', margin:0}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                        <div style={{margin:isMobile?0:'100px auto auto auto',width:isMobile?'100%':'80%',height:'500px',backgroundImage: `url(${ArchitectureBG})`, backgroundSize: 'cover',backgroundPosition:'center',borderRadius: isMobile?0:'8px', overflow:'hidden'}} className="home-service-type">
                            <div style={{width:isMobile?'100%':'80%', height: '500px'}} className="home-service-type-overlay"></div>
                            <div style={{color:'#f5ca9f',fontSize:isMobile?'30px':'35px'}} className="home-title home-service-type-title">Architecture Design</div>
                            <div className="home-service-type-line"></div>
                            <div className="home-service-type-description">
                                We believe architecture must leave a lasting impact on the people who live, work, and play in the buildings we design. 
                                That’s why you’ll never see a boring style. 
                                From the moment a project begins, we work with you to determine what’s most successful for your specific needs.
                            </div>
                        </div>
                    </FadeInContainer>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                        <div style={{margin:isMobile?0:'100px auto auto auto',width:isMobile?'100%':'80%',height:'500px',backgroundImage: `url(${ConstructionBG})`, backgroundSize: 'cover',backgroundPosition:'center',borderRadius: isMobile?0:'8px', overflow:'hidden'}} className="home-service-type">
                            <div style={{width:isMobile?'100%':'80%', height: '500px'}} className="home-service-type-overlay"></div>
                            <div style={{color:'#f5ca9f',fontSize:isMobile?'30px':'35px'}} className="home-title home-service-type-title">Construction</div>
                            <div className="home-service-type-line"></div>
                            <div className="home-service-type-description">
                                Building means creating. Buildings change our world. The roads, bridges, office or residential buildings, sports facilities and cultural centers creates living spaces. And that for more than 100 years all over India.
                            </div>
                        </div>
                    </FadeInContainer>
                </Col>
                <Col md={6} xs={12} style={{padding:isMobile?0:'100px 0 100px 0', margin:0}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                        <div style={{margin:isMobile?0:'auto auto 100px auto',width:isMobile?'100%':'80%',height:'500px',backgroundImage: `url(${InteriorBG})`, backgroundSize: 'cover',backgroundPosition:'center',borderRadius: isMobile?0:'8px', overflow:'hidden'}} className="home-service-type">
                            <div style={{width:isMobile?'100%':'80%', height: '500px'}} className="home-service-type-overlay"></div>
                            <div style={{color:'#f5ca9f',fontSize:isMobile?'30px':'35px'}} className="home-title home-service-type-title">Interior Design</div>
                            <div className="home-service-type-line"></div>
                            <div className="home-service-type-description">
                                Every material, surface, finish, and color contributes to the emotional impact of an interior space. So we consider the interrelatedness of every interior with the structure itself, 
                                providing functional and aesthetic complements to architecture.
                            </div>
                        </div>
                    </FadeInContainer>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                        <div style={{margin:isMobile?0:'auto auto 100px auto',width:isMobile?'100%':'80%',height:'500px',backgroundImage: `url(${ProjectPlanningBG})`, backgroundSize: 'cover',backgroundPosition:'center',borderRadius: isMobile?0:'8px', overflow:'hidden'}} className="home-service-type">
                            <div style={{width:isMobile?'100%':'80%', height: '500px'}} className="home-service-type-overlay"></div>
                            <div style={{color:'#f5ca9f',fontSize:isMobile?'30px':'35px'}} className="home-title home-service-type-title">Project Planning</div>
                            <div className="home-service-type-line"></div>
                            <div className="home-service-type-description">
                                Every material, surface, finish, and color contributes to the emotional impact of an interior space. So we consider the interrelatedness of every interior with the structure itself, 
                                providing functional and aesthetic complements to architecture.
                            </div>
                        </div>
                    </FadeInContainer>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                        <div style={{margin:isMobile?0:'auto auto 100px auto',width:isMobile?'100%':'80%',height:'500px',backgroundImage: `url(${EstimationBG})`, backgroundSize: 'cover',backgroundPosition:'center',borderRadius: isMobile?0:'8px', overflow:'hidden'}} className="home-service-type">
                            <div style={{width:isMobile?'100%':'80%', height: '500px'}} className="home-service-type-overlay"></div>
                            <div style={{color:'#f5ca9f',fontSize:isMobile?'30px':'35px'}} className="home-title home-service-type-title">Project Estimation</div>
                            <div className="home-service-type-line"></div>
                            <div className="home-service-type-description">
                                Every material, surface, finish, and color contributes to the emotional impact of an interior space. So we consider the interrelatedness of every interior with the structure itself, 
                                providing functional and aesthetic complements to architecture.
                            </div>
                        </div>
                    </FadeInContainer>
                </Col>
            </Row>
            
            <Row md={1} xs={1} style={{height: isMobile?'200px':'150px', width: '100%', margin: '100px 0 100px 0', padding:0, overflow: 'hidden'}} >
                <Col style={{margin:0}}>
                    <RevealFadeAnimation>
                        <div style={{textTransform: 'uppercase', margin: 0, padding: isMobile?'auto':0, fontFamily: `Roboto, Arial, sans-serif`, fontSize:isMobile?'40px':'60px',letterSpacing: '0.01em', fontWeight: '700', lineHeight: isMobile?'1.6em':'1.4em'}} className="home-title">
                            Your Dream is Our Work
                        </div>
                    </RevealFadeAnimation>
                </Col>                         
            </Row>

            <Row style={{overflow: 'hidden', height: '400px', width: '100%', margin:0, backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={{height: '400px'}} className="home-overlay"></div>
                <Row md={1} xs={1} style={{zIndex: 2, marginRight:0, width: '100%'}}>
                    <Col md={8} style={{marginRight:0, marginTop: '100px'}}>
                        <Row><div style={{textAlign: 'justify', color: '#ba9774', fontSize: isMobile?'28px':'50px', marginBottom:0, paddingLeft: '10%'}} className="home-title">Ready to get Started?</div></Row>
                        <Row style={{marginTop: 0}}><div style={{color: 'white', fontSize: '16px', paddingLeft: '10%'}} className="home-description">Let's schedule a time to discuss your goals.</div></Row>
                        <Row><button style={{width: '200px', marginLeft: '10%', marginTop: '2%', fontSize: isMobile?16:12}} onClick={()=>{props.history.push('/contact')}} className="home-button">CONTACT US</button></Row>
                    </Col>
                </Row>
            </Row>

        </Container>
    );
}

export default withRouter(Home);