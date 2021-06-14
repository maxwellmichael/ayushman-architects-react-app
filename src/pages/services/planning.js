import {motion} from 'framer-motion';
import React from 'react';
import { Link } from "react-router-dom";
import Planning1 from '../../images/backgrounds/project-planning.jpg';
import Planning2 from '../../images/backgrounds/scott-graham-5fNmWej4tAA-unsplash.jpg';


const PlanningPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">Project Planning</div>

                <div className="project-page-description">
                    Ayushman Architects provides comprehensive master planning services to help clients plan for holistic, strategic growth in their facilities, communities and campuses.  Acting in tandem with our building design services, our master planning capabilities engage teams before project development to ensure alignment between short and long-term visions for space and design. To learn how we can partner with you to develop and execute a comprehensive master plan, <Link to="/contact"><u>contact us</u></Link>.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Planning1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Planning2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default PlanningPage;