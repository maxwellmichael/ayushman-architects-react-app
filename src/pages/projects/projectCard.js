import React from 'react';
import {withRouter} from 'react-router-dom';


const ProjectCard = (props)=>{
    
    return(
            <div className="project-card-main">
                <div className="project-card-container" style={{backgroundImage:`url(${props.data.images?props.data.images[0].url:'#'})`}}>
                    <div className="subtitle">{props.data.location}</div>
                    <div className="title">{props.data.title}</div>
                    <button onClick={()=>props.history.push({pathname:'/project', state:{...props.data}})} className="cta-button">View</button>
                    <div className="right-triangle"></div>
                </div>
            </div>
    )
}

export default withRouter(ProjectCard);