
import React from 'react';
import { Link } from "react-router-dom";
import Building1 from '../../images/backgrounds/building.jpg';
import Building2 from '../../images/backgrounds/4.-STRANY-PERSIDSKOGO-ZALIVA-CHastnaya-rezidentsiya-CITADEL-GULF-COUNTRIES-Private-residence-CITADEL.webp';
import {motion} from 'framer-motion'


const ArchitecturePage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:1, delay:0.7}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">Architecture</div>

                <div className="project-page-description">
                Ayushman Architects has created a legacy of intelligent and innovative building designs that deliver strategic results for our clients through a full range of architectural services. Using a comprehensive design process that shapes our work to deliver on stated project goals, Ayushman Architects first leads organizations through pre-design activities like visioning, strategic planning, master planning, etc. Once completed, our team of architectural designers craft preliminary concepts. At client approval, Ayushman Architects delivers finalized documentation of selected designs to meet engineering, construction, and budgetary requirements. To learn more about our comprehensive architectural and building design services, <Link to="/contact"><u>contact us</u></Link>.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Building1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Building2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default ArchitecturePage;