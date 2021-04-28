import React, {Component} from 'react';



class Footer extends Component{


    render(){

        return(
            <React.Fragment>
                <footer className="footer-distributed">
 
                    <div className="footer-left">

                    <h3>AYUSHMAN-<span>ARCHITECTS.com</span></h3>


                    <p className="footer-company-name">Ayushman-Architects &copy; 2021</p>
                    </div>

                    <div className="footer-center">

                    <div className="center-item">
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Revolution Street</span> Delhi, India</p>
                    </div>

                    <div className="center-item">
                    <i className="fa fa-phone"></i>
                    <p>+91 7356102087</p>
                    </div>

                    <div className="center-item">
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:maxwellmichael522@gmail.com">contact@</a>Ayushman-Architects.com</p>
                    </div>

                    </div>

                    <div className="footer-right">


                    <div className="footer-icons">

                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-github"></i></a>

                    </div>

                    </div>

                </footer>
          
            </React.Fragment>
        );
    }
}


export default Footer;