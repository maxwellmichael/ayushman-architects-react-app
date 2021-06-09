import React, {useEffect, useState} from 'react';
import { useTransition, animated, config } from 'react-spring'
import {Image, Col, Row} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import useFirestore from '../firebase/useFirestore';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import ProjectCard from './projects/projectCard';

import Building1 from '../images/backgrounds/daniel-chen-cNaEqXSsZ0k-unsplash.jpg';
import image1 from '../images/backgrounds/architecture_bg2.jpg';
import image2 from '../images/backgrounds/lucas-franco-aRTjFXs6HNc-unsplash.jpg';
import Building2 from '../images/backgrounds/sean-pollock-PhYq704ffdA-unsplash.jpg';
import ArchitectureDrawings from '../images/backgrounds/architecture_drawings.png';


import {ReactComponent as ArchitectureLogo} from '../images/icons/services/architecture.svg';
import {ReactComponent as ConstructionLogo} from '../images/icons/services/construction.svg';
import {ReactComponent as PlanningLogo} from '../images/icons/services/planning.svg';
import {ReactComponent as EstimationLogo} from '../images/icons/services/estimation.svg';
import {ReactComponent as InteriorLogo} from '../images/icons/services/interior.svg';



import Slide3 from '../images/backgrounds/mobile/slide1.jpg';
import Slide2 from '../images/backgrounds/mobile/izuddin-helmi-adnan-ABKvlwjFT68-unsplash-min.jpg';
import Slide1 from '../images/backgrounds/mobile/slide3.jpg';
import Slide4 from '../images/backgrounds/mobile/slide4.jpg';



import Building from '../images/backgrounds/building.jpg';


import FadeInContainer, {FadeInFromLeft, FadeInFromRight, FadeInFromBottom, FadeInFromTop, RevealFadeAnimation} from '../components/utils/fadeInAnimation';

const Home = (props)=>{
    const {docs} = useFirestore('projects') 
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
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:1, delay:0.7}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>
            <Helmet>
                <title>Ayushman Architects</title>
                <meta name="description" content="Architecture,Interiors,Construction,Project Planning,Project Estimation,Architecture Designs,Architecture Designing,Beautiful Interior Designs,Best Architecture Designs,Interior Designs,Interior Designing,Interior Designing Companies,Best Interior Designs,Beautiful Interior Designs,Best Project Planning,Project Planning Companies,Project Estimation Companies,Best Project Estimation Companies" />
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
                    <FadeInContainer partialVisibility FadeIn={FadeInFromLeft}>
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

            <Row style={{margin:'40px 20px 200px 20px', padding:0}}>
                <FadeInContainer FadeIn={FadeInFromBottom}>
                    <div style={{fontSize:isMobile?'18px':'26px',color:'#f5ca9f',textAlign:isMobile?'justify':'center'}} className="home-description">
                        We believe that well designed spaces encourage joy and connectivity between people. We design by exploring, investigating and testing which creates meaningful spaces to live, work and play.
                    </div>
                </FadeInContainer>
            </Row>
            
            {/*-----------------------Services Start---------------------*/}
            <Row xs={1} style={{margin:'100px 0 40px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:isMobile?'40px':'60px', margin:'auto auto 30px auto'}} className="home-title">EXPERTISE</div>
                </RevealFadeAnimation>
                <div style={{padding:0,margin:'auto',textAlign:'center',fontSize:'18px'}} className="home-description">We are a full service architecture, interiors, construction, planning & estimation firm.</div>
            </Row>
            <div style={{width: '100%', margin:'0px 0px 80px 0px'}} className="home-line"></div>
            <Row md={3} xs={1} style={{width:'100%', margin:0, padding:0}}>
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div className="card-logo"><ArchitectureLogo /></div>
                        <div className="card-title">Architecture</div>
                        <div className="card-description">Building Design, Feasibility Studies & Zoning Studies Adaptive Re-Use, Building Evaluation & Analysis...</div>
                        <button className="card-button">View More</button>
                    </div>
                    </FadeInContainer>
                </Col>
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div className="card-logo"><InteriorLogo /></div>
                        <div className="card-title">Interior</div>
                        <div className="card-description">Space Planning/Test Fits, Full Service Interior Design, Furniture Selection, 3-D Visualization..</div>
                        <button className="card-button">View More</button>
                    </div>
                    </FadeInContainer>
                </Col>
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div className="card-logo"><PlanningLogo style={{width:'56px', height:'56px'}} /></div>
                        <div className="card-title">Planning</div>
                        <div className="card-description">Site Evaluation & Analysis Site/Master/Campus Planning Green Roof Design, Site Logistic Planning...</div>
                        <button className="card-button">View More</button>
                    </div>
                    </FadeInContainer>
                </Col>
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div className="card-logo"><ConstructionLogo style={{width:'56px', height:'56px'}} /></div>
                        <div className="card-title">Construction</div>
                        <div className="card-description">Marking & Grading, Excavation, Concreting, Brick masonry, Plumbing, Welding, Electrical, Roof laying...</div>
                        <button className="card-button">View More</button>
                    </div>
                    </FadeInContainer>
                </Col>
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div className="card-logo"><EstimationLogo style={{width:'56px', height:'56px'}} /></div>
                        <div className="card-title">Estimation</div>
                        <div className="card-description">Top-down estimate, Comparative or analogous estimation, Bottom-up estimate & Expert judgement...</div>
                        <button className="card-button">View More</button>
                    </div>
                    </FadeInContainer>
                </Col>
            </Row>
            <Row style={{margin:'100px 0px 100px 0px',padding:0,width:'100%',height:isMobile?'60vh':'80vh',backgroundColor:'white',position:'relative'}}>
                <div style={{width:'100%',height:'100%',margin:0,position:'absolute',backgroundImage:`url(${ArchitectureDrawings})`,backgroundAttachment:'fixed',backgroundSize:'cover'}}>
                </div>
                <Col style={{margin:isMobile?'60px auto auto auto':'150px auto auto auto'}}>
                    <RevealFadeAnimation>
                        <div style={{textTransform: 'uppercase', margin: 0, padding: isMobile?'auto':'auto 50px auto 50px', fontFamily: `Libre Baskerville, sans-serif`, fontSize:isMobile?'20px':'30px',letterSpacing: '0.005em', fontWeight: '700', lineHeight: isMobile?'1.6em':'1.4em', color:'#f5ca9f',textAlign:isMobile?'center':'center',zIndex:3}} className="home-title">
                            "A GREAT BUILDING MUST BEGIN WITH THE IMMEASURABLE, MUST GO THROUGH MEASURABLE MEANS WHEN IT IS BEING DESIGNED, AND IN THE END MUST BE UNMEASURED."
                        </div>
                    </RevealFadeAnimation>
                    <div style={{textTransform: 'uppercase', margin: 0, padding: isMobile?'auto':'auto 50px auto 50px', fontFamily: `Libre Baskerville, sans-serif`, fontSize:isMobile?'30px':'40px',letterSpacing: '0.005em', fontWeight: '700', lineHeight: isMobile?'1.6em':'1.4em', color:'black',textAlign:'center',zIndex:3}} className="home-title">
                    -   LOUIS KAHN - 
                    </div>
                </Col>
                <div style={{height:'100%',width:'100%',backgroundColor:'black',opacity:0.7,position:'absolute'}}></div>        
            </Row>
            {/*-----------------------Services End---------------------*/}


            {/*------------------------Projects Start------------------- */}
            <Row xs={1} style={{margin:'200px 0 40px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:isMobile?'40px':'60px', margin:'auto'}} className="home-title">What we have Built</div>
                </RevealFadeAnimation>
                <div style={{padding:0,margin:'auto',textAlign:'center',fontSize:'18px'}} className="home-description">We Build Your Dream</div>
            </Row>
            <Row md={3} xs={2} style={{backgroundColor:'black', width: '100%', height: 'auto', margin: '0px 0px 0px 0px', paddingBottom: '40px'}}>
                <Col md={1} xs={1} >
                    <div style={{height: '80%', backgroundColor: '#ba9774', marginLeft: '80%'}} className="home-line-inverted"></div>   
                </Col>
                <Col md={{span:5, order:1}} xs={{span:8, order:0}} style={{marginTop: '4%', marginLeft:'20px'}} >
                    <FadeInContainer FadeIn={FadeInFromTop}>
                        <Row style={{marginBottom: '8%'}}>
                            <div style={{textAlign: 'right', color: '#ba9774', fontSize: '20px', paddingBottom:0, paddingLeft:0, letterSpacing: '0.1em'}} className="home-description">CATEGORIES</div>
                            <div style={{width: '100%', marginTop:0}} className="home-line"></div>
                        </Row>
                    </FadeInContainer>
                    <Row md={{span: 1, offset: 2}}>
                        <Col style={{marginLeft: `${isMobile?0:60}px`}}>
                            <FadeInContainer FadeIn={FadeInFromRight}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Architecture Design</div>
                            </FadeInContainer>
                            <FadeInContainer FadeIn={FadeInFromLeft}>
                                <div style={{position: 'relative', textAlign: 'left', color: 'white', fontSize: '16px'}} className="home-description">Interior Design</div>
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
                        <button onClick={()=>{props.history.push('/projects')}} className='home-button'>All Projects</button>
                    </Row>
                </Col>
                <Col md={{span:5, order:0}} xs={{span:12, order:1}} style={{padding: 0}}>
                    <Image alt="Architecture Building" className="home-image" style={{height: '400px', marginTop: '4%'}} src={Building2} />
                </Col>
            </Row>

                
            <Row style={{margin:'100px 0 20px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:'60px', margin:'auto'}} className="home-title">Architecture Projects</div>
                </RevealFadeAnimation>
            </Row>
            <Row md={2} xs={1} style={{width:'100%', margin:0, padding:0}}>
                    {docs.map((project, i)=><Col key={i} style={{marginTop: 60}}>
                                            <FadeInContainer FadeIn={FadeInFromBottom}>
                                                <ProjectCard data={project} />
                                            </FadeInContainer>
                                            </Col>)}
            </Row>
             {/*------------------------Projects End------------------- */}

    
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

        </motion.div>
    );
}

export default withRouter(Home);