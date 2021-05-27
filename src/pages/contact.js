import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import BG1 from '../images/backgrounds/planetorium.jpg';
import {useForm} from "react-hook-form";
import {SUBMIT_CONTACT_FORM} from '../redux/contact/contact.actions';
import {connect} from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import FadeInContainer, {FadeInFromRight, RevealFadeAnimation} from '../components/utils/fadeInAnimation';
import {Helmet} from 'react-helmet';



const ContactPage = (props)=>{

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const {register} = useForm();

  const onSubmit = (e)=>{
    e.preventDefault();
    props.dispatch(SUBMIT_CONTACT_FORM(e));
  }

  return(
    <Container fluid style={{backgroundColor: 'black', padding:0, maxWidth: '100vw', overflow:'hidden'}}>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact Ayushman Architects, Ayushman Architects, Architecture design, Interior design, Product design And Construction, Architecture, Interior, Project, Architecture Tools, ayushmanarchitects, AyushmanArchitects, AYUSHMANARCHITECTS, AYUSHMAN, ARCHITECTS, indian architects, best architects, architects in india, interiors, interior
                construction, project estimation, project planning, planning, PLANNING, Planning, Estimation, Estimation, PROJECT ESTIMATION, PROJECTESTIMATION, projectestimation, interiordesigns, interiors for home, homeinteriors, architecturedesigns, architectures, architecture companies, architecture designs, architecture planning, architecture and interior designs
                Interiors for home, interior for my home, best architecture companies" />
      </Helmet>
      <Container fluid style={{backgroundImage:`url(${BG1})`, backgroundSize: 'cover', backgroundPosition:'center', width: '100%', height: '100vh', padding: 0, margin:0}}>
        <Row style={{margin:0}}><div className="contact-overlay"></div></Row>
        <RevealFadeAnimation>
          <div style={{color:'#f5ca9f',zIndex:3, textAlign:'center',paddingTop: isMobile?'50%':'20%', fontSize: '60px'}} className="contact-title">Contact us</div>
        </RevealFadeAnimation>
      </Container>
      <Row md={2} xs={1} style={{padding: isMobile?'80px 12px 100px 12px':'80px 12px 100px 70px'}}>
        <Col md={{span:7, order:0}} xs={{span:12, order:1}} style={{marginBottom:'60px'}} >
          <form onSubmit={onSubmit}>
            <Row><div style={{padding:0}} className="contact-title">Arrange a free Consultation</div></Row>
            <Row><input className="contact-input" type="text" placeholder="Full name" name="fullname" ref={register} /></Row>
            <Row><input className="contact-input" type="email" placeholder="Email" name="email" ref={register} /></Row>
            <Row><input className="contact-input" type="text" placeholder="Telephone" name="telephone" ref={register} /></Row>
            <Row><textarea className="contact-textarea" type="text" placeholder="Project Details" name="projectdetails" ref={register} /></Row>
            <Row><input className="contact-input" type="text" placeholder="Where is the Location of your project" name="projectlocation" ref={register} /></Row>
            <Row><input className="contact-input" type="text" placeholder="What is your budget for the project" name="projectbudget" ref={register} /></Row>
            <Row><button type="submit" className="contact-button">Submit</button></Row>
          </form>
        </Col>

        <Col md={{span:5, order:1}} xs={{span:12, order:0}} style={{marginBottom:'40px'}}>
          <FadeInContainer FadeIn={FadeInFromRight}>
          <Row><div style={{padding:0}} className="contact-title">Lets discuss your Project</div></Row>
          <Row>
            <div style={{color:'white', fontSize:'18px'}} className="contact-description">
              We would love to share ideas, suggest options and answer your questions.
              We're ready to become your partner in this fascinating landscape of Architecture, Design and Construction.
            </div>
          </Row>
          </FadeInContainer>
        </Col>
      </Row>

    </Container>
  );
}

export default connect()(ContactPage);