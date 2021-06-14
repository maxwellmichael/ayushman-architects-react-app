
import React from 'react';
import { Link } from "react-router-dom";
import Construction1 from '../../images/backgrounds/uwe-hensel-44Uz2J7z9Rg-unsplash.jpg';
import Construction2 from '../../images/backgrounds/rick-hyne--4jcZEZZ9sk-unsplash.jpg';
import {motion} from 'framer-motion';

const ConstructionPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">CONSTRUCTION</div>

                <div className="project-page-description">
                    Our services span all areas of the construction industry and cover the entire construction value chain. We bring together people, materials and machinery at the right place and at the right time in order to realise even complex construction projects – on schedule, of the highest quality and at the best price.
                    For more about how Ayushman Architects can help you in construction services that inspire great experiences, <Link to="/contact"><u>contact us</u></Link>.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Construction1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Construction2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default ConstructionPage;