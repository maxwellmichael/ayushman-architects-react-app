import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import BG1 from '../images/backgrounds/planetorium.jpg';
import {useForm} from "react-hook-form";
import {SUBMIT_CONTACT_FORM} from '../redux/contact/contact.actions';
import {connect} from 'react-redux';

const ContactPage = (props)=>{

  const {register} = useForm();

  const onSubmit = (e)=>{
    e.preventDefault();
    props.dispatch(SUBMIT_CONTACT_FORM(e));
  }

  return(
    <Container fluid style={{backgroundColor: 'black', padding:0, maxWidth: '100vw', overflow:'hidden'}}>
      <Container fluid style={{backgroundImage:`url(${BG1})`, backgroundSize: 'cover', backgroundPosition:'center', width: '100%', height: '100vh', padding: 0, margin:0}}>
      </Container>
      <Row md={2} xs={1}>
        <Col md={8} xs={12} style={{padding: '80px 12px 100px 70px'}}>
        <form onSubmit={onSubmit}>
          <Row><div style={{textAlign:'left', padding:0}} className="contact-title">Arrange a free Consultation</div></Row>
          <Row><input className="contact-input" type="text" placeholder="Full name" name="fullname" ref={register} /></Row>
          <Row><input className="contact-input" type="email" placeholder="Email" name="email" ref={register} /></Row>
          <Row><input className="contact-input" type="text" placeholder="Telephone" name="telephone" ref={register} /></Row>
          <Row><textarea className="contact-textarea" type="text" placeholder="Project Details" name="projectdetails" ref={register} /></Row>
          <Row><input className="contact-input" type="text" placeholder="Where is the Location of your project" name="projectlocation" ref={register} /></Row>
          <Row><input className="contact-input" type="text" placeholder="What is your budget for the project" name="projectbudget" ref={register} /></Row>
          <Row><button type="submit" className="contact-button">Submit</button></Row>
        </form>
        </Col>

        <Col>
        </Col>
      </Row>

    </Container>
  );
}

export default connect()(ContactPage);