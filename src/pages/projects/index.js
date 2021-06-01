import React, {useState, useEffect} from 'react';
import ProjectCard from './projectCard';
import {connect} from 'react-redux';
import useFirestore from '../../firebase/useFirestore';
import {Container, Row, Col} from 'react-bootstrap';
import MainBG from '../../images/backgrounds/uwe-hensel-44Uz2J7z9Rg-unsplash.jpg'
import MobileBG from '../../images/backgrounds/sebastian-bednarek-OxC3gdWzB-8-unsplash.jpg'
import {RevealFadeAnimation} from '../../components/utils/fadeInAnimation';
import { useMediaQuery } from 'react-responsive';


const Projects = ()=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const {docs} = useFirestore('projects')
    const [projectsType, setProjectsType] = useState('ARCHITECTURE');
    const [projectsSort, setProjectsSort] = useState('FEATURED');
    
    useEffect(()=>{
        console.log(projectsType,projectsSort)
    }, [projectsType, projectsSort])

    
    return(
        <React.Fragment>
            <Container fluid style={{margin:0, padding:0, height: '100vh', backgroundImage:`url(${isMobile?MobileBG:MainBG})`, backgroundSize:'cover'}}>
                <div className="contact-overlay"></div>
                <Row style={{padding:isMobile?'60% 0 0 0':'20% 0 0 0', margin:0, zIndex:3}}>
                    <RevealFadeAnimation>
                        <div style={{fontSize:'60px', margin:'auto', zIndex:3}} className="projects-title">Our Work</div>
                    </RevealFadeAnimation>
                </Row>
            </Container>
        <div className="projects-main">
            <div className="projects-nav">
                <div className="projects-nav-link-container">
                    <select onChange={(event)=>{setProjectsSort(event.target.value)}} className="projects-nav-dropdown" >
                        <option className="projects-nav-dropdown-option" value='FEATURED'>Featured</option>
                        <option className="projects-nav-dropdown-option" value='NEWEST'>Newest</option>
                    </select>
                </div>

                <div className="projects-nav-link-container">
                    <select onChange={(event)=>{setProjectsType(event.target.value)}} className="projects-nav-dropdown">
                        <option className="projects-nav-dropdown-option" value='ALL'>All</option>
                        <option className="projects-nav-dropdown-option" value='ARCHITECTURE'>Architecture</option>
                        <option className="projects-nav-dropdown-option" value='INTERIOR_DESIGN'>Interior Design</option>
                        <option className="projects-nav-dropdown-option" value='CONSTRUCTION'>Construction</option>
                    </select>
                </div>
            </div>

            <Row md={2} xs={1} style={{width:'100%', margin:0, padding:0}}>
                {docs.map((project, i)=><Col key={i} style={{marginTop: 60}}><ProjectCard data={project} /></Col>)}
            </Row>
            
        </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state)=>{

    return({
        projects: state.projects,
    })
}


export default connect(mapStateToProps)(Projects);