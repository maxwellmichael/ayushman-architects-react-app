
import React from 'react';
import { Link } from "react-router-dom";
import Interior1 from '../../images/backgrounds/interior_bg.jpg';
import Interior2 from '../../images/backgrounds/mustafa-matkawala-z0ZhIQF5Yec-unsplash.jpg';
import {motion} from 'framer-motion';

const InteriorDesignPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">Interior Design</div>

                <div className="project-page-description">
                By understanding a client’s space requirements, image and people needs along with their overall business strategies, we create innovative interior designs that are efficient, flexible, technologically-compatible and culturally-aligned. Using a guided design process, through which we explore the intent of your space, our highly trained interior design team will develop a comprehensive recommendation that includes specific details such as fixtures, color palettes, finishes, lighting, furniture, graphics, and wayfinding that will coordinate with the building’s overall structure while meeting the organization’s goals. Detailed documentation of final designs allows for easy implementation that fully integrates with the space’s engineering and technology requirements.
                For more about how Ayushman Architects can help you design beautiful spaces that inspire great experiences, <Link to="/contact"><u>contact us</u></Link>.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Interior1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Interior2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default InteriorDesignPage;