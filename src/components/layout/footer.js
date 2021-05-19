import React, {Component} from 'react';
import {ReactComponent as Instagram} from '../../images/icons/instagram-original.svg';
import {ReactComponent as Facebook} from '../../images/icons/facebook-original.svg';
import {ReactComponent as Twitter} from '../../images/icons/twitter-original.svg';

import {ReactComponent as Phone} from '../../images/icons/phone.svg';
import {ReactComponent as Envelope} from '../../images/icons/envelope.svg';
import {ReactComponent as Marker} from '../../images/icons/map-marker.svg';





class Footer extends Component{


    render(){

        return(
            <React.Fragment>
                <footer className="footer-distributed">
 
                    <div className="footer-left">
                        <h3>AYUSHMAN ARCHITECTS</h3>
                        <p className="footer-company-name">Ayushman-Architects &copy; 2021</p>
                    </div>

                    <div className="footer-center">

                        <div className="center-item">
                            <i><Marker /></i>
                            <p>21 Revolution Street Delhi, India</p>
                        </div>

                        <div className="center-item">
                            <i><Phone /></i>
                            <p>+91 7356102087</p>
                        </div>

                        <div className="center-item">
                            <i><Envelope/></i>
                            <p><a href="mailto:maxwellmichael522@gmail.com">contact@</a>Ayushman-Architects.com</p>
                        </div>

                    </div>

                    <div className="footer-right">
                        <div className="footer-icons">
                            <a href="/"><Facebook/></a>
                            <a href="/"><Twitter/></a>
                            <a href="http://instagram.com/ayushman_architects"><Instagram/></a>
                        </div>
                    </div>

                </footer>
          
            </React.Fragment>
        );
    }
}


export default Footer;