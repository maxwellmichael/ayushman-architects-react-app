

import React from 'react';
import { Link } from "react-router-dom";
import Estimation1 from '../../images/backgrounds/estimation.jpg';
import Estimation2 from '../../images/backgrounds/firmbee-com-gcsNOsPEXfs-unsplash.jpg';
import {motion} from 'framer-motion';

const EstimationPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">ESTIMATION</div>

                <div className="project-page-description">
                    Ayushman Architects offers a wide range of Project cost estimating services and cost management services to cater to the needs of the ever-growing construction industry. Being in the business for many years, we have reached a point where we totally understand the market conditions and can handle cost estimates for the project of any complexity. Our team of expert estimators deliver accurate, timely and comprehensive estimates containing marked-up plans with a special emphasis on precision and attention to detail and remain engaged with the clients from conception to completion of the project.
                    For more about how Ayushman Architects can help you in estimation services <Link to="/contact"><u>contact us</u></Link>.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Estimation1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Estimation2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default EstimationPage;