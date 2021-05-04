import React from 'react';
import { useLocation } from "react-router-dom";


const ProjectPage = (props)=>{

    const location = useLocation();


    return(
        <div className='project-page-main'>

            <div className="project-page-content">

                <div className="project-page-title">{location.state.title}</div>

                <div className="project-page-location">{location.state.location}</div>

                <div className="project-page-description">{location.state.description}</div>

            </div>

            <div className="project-page-gallery">
                {location.state.images.map(image=>(<div style={{backgroundImage:`url(${image})`}} className="project-page-image"></div>))}

               
            </div>

        </div>
    )
}


export default ProjectPage;