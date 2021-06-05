import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {ReactComponent as FacebookLogo} from '../../images/icons/social/facebook-original.svg';
import {ReactComponent as InstagramLogo} from '../../images/icons/social/instagram-original.svg';
import {ReactComponent as TwitterLogo} from '../../images/icons/social/twitter-original.svg';




const Footer = ()=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return(
        <div className="footer-main">
            <Row xs={1} style={{margin:0}}>
                <Row xs={1} style={{margin:'0px 0px 30px 0px'}}>
                    <Col><div style={{margin:'auto'}} className="footer-title">Ayushman Architects</div></Col>
                    <Col><div style={{width:isMobile?'60%':'30%'}} className="footer-line"></div></Col>

                    <Col><div style={{margin:'auto'}} className="footer-description">Copyright © 2021 Ayushmanarchitects.com</div></Col>
                </Row>
                
            </Row>
            <Row style={{margin:'auto auto 30px auto', width:'200px'}} xs={3}>
                <Col><div className="social-logo"><Link to="/projects"><InstagramLogo/></Link></div></Col>
                <Col><div className="social-logo"><Link to="/about"><TwitterLogo/></Link></div></Col>
                <Col><div className="social-logo"><Link to="/contact"><FacebookLogo/></Link></div></Col>
            </Row>
            <Row style={{margin:0}}>
                <div style={{margin:'auto', fontSize:'12px'}} className="footer-heading">Website Developed & Designed by <span className="creator-name"><a href="https://www.google.com">MAXWELL</a></span></div>
            </Row>
        </div>
    )
}

export default Footer;