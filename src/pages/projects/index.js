import React, {useState, useEffect} from 'react';
import ProjectCard from './projectCard';
import {connect} from 'react-redux';
import useFirestore from '../../firebase/useFirestore';
import {Container, Row, Col} from 'react-bootstrap';
import MainBG from '../../images/backgrounds/uwe-hensel-44Uz2J7z9Rg-unsplash.jpg'
import MobileBG from '../../images/backgrounds/mobile/izuddin-helmi-adnan-ABKvlwjFT68-unsplash-min.jpg'
import {RevealFadeAnimation} from '../../components/utils/fadeInAnimation';
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet';

const Projects = ()=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const [projectsType, setProjectsType] = useState('ARCHITECTURE');
    const [projectsSort, setProjectsSort] = useState('createdAt');
    const {docs} = useFirestore('projects', projectsType, projectsSort)

    
    useEffect(()=>{
        console.log(projectsType,projectsSort)
    }, [projectsType, projectsSort, docs])

    
    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} 
        style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>
            <Helmet>
                <title>Projects</title>
                <meta name="description" content="Architecture,Interiors,Construction,Project Planning,Project Estimation,Architecture Designs,Architecture Designing,Beautiful Interior Designs,Best Architecture Designs,Interior Designs,Interior Designing,Interior Designing Companies,Best Interior Designs,Beautiful Interior Designs,Best Project Planning,Project Planning Companies,Project Estimation Companies,Best Project Estimation Companies" />
            </Helmet>
            <Container fluid style={{margin:'0px 0px 100px 0px', padding:0, height: '100vh', backgroundImage:`url(${isMobile?MobileBG:MainBG})`, backgroundSize:'cover'}}>
                <div style={{height:'100vh'}} className="contact-overlay"></div>
                <Row style={{padding:isMobile?'60% 0 0 0':'20% 0 0 0', margin:0, zIndex:3}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:'60px', margin:'auto', zIndex:3}} className="projects-title">
                        Our Work
                    </div>
                </RevealFadeAnimation>
                </Row>
            </Container>
            <div className="projects-main">
                <div className="projects-nav">
                    <div className="projects-nav-link-container">
                        <select onChange={(event)=>{setProjectsSort(event.target.value)}} className="projects-nav-dropdown" >
                            <option className="projects-nav-dropdown-option" value='title'>Name</option>
                            <option className="projects-nav-dropdown-option" value='createdAt'>Date</option>
                        </select>
                    </div>

                    <div className="projects-nav-link-container">
                        <select onChange={(event)=>{setProjectsType(event.target.value)}} className="projects-nav-dropdown">
                            <option className="projects-nav-dropdown-option" value='ARCHITECTURE'>Architecture</option>
                            <option className="projects-nav-dropdown-option" value='INTERIOR'>Interior Design</option>
                            <option className="projects-nav-dropdown-option" value='CONSTRUCTION'>Construction</option>
                        </select>
                    </div>
                </div>
            </div>

            <Row md={2} xs={1} style={{width:'100%', margin:'0px 0px 100px 0px', padding:0}}>
                {docs.map((project, i)=><Col key={i} style={{marginTop: 60}}><ProjectCard data={project} /></Col>)}
            </Row>
        </motion.div>
    )
}

const mapStateToProps = (state)=>{

    return({
        projects: state.projects,
    })
}


export default connect(mapStateToProps)(Projects);