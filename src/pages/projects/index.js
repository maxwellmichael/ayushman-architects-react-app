import React, {useState, useEffect} from 'react';
import ProjectCard from './projectCard';
import {connect} from 'react-redux';
import {GET_PROJECTS} from '../../redux/projects/projects.actions';
import FadeInContainer,{FadeInFromBottom} from '../../components/utils/fadeInAnimation';





const Projects = (props)=>{

    const {dispatch, backendUrl} = props

    useEffect(() => {
        let mounted = true;
      
        if(mounted){
            dispatch(GET_PROJECTS(null, backendUrl))
        }
        return () => mounted = false;
      }, [dispatch, backendUrl])



    const [projects, setProjects] = useState({type:'ARCHITECTURE', sort:'FEATURED'});

    const handleProjectsSortType = (event)=>{
        let newProjectsType = {...projects};
        newProjectsType.sort=event.target.value;
        console.log(newProjectsType);
        setProjects(newProjectsType)
    }

    const handleProjectsType = (event)=>{
        let newProjectsType = {...projects};
        newProjectsType.type=event.target.value;
        console.log(newProjectsType);
        setProjects(newProjectsType);
    }

    
    return(
        <div className="projects-main">
            <div className="projects-nav">

                <div className="projects-nav-link-container">
                    <div className="projects-label">SORT</div>
                    <select onChange={(event)=>{handleProjectsSortType(event)}} className="projects-nav-dropdown" >
                        <option className="projects-nav-dropdown-option" value='FEATURED'>Featured</option>
                        <option className="projects-nav-dropdown-option" value='NEWEST'>Newest</option>
                    </select>
                </div>

                <div className="projects-nav-link-container">
                    <div className="projects-label">PROJECT</div>
                    <select onChange={(event)=>{handleProjectsType(event)}} className="projects-nav-dropdown">
                        <option className="projects-nav-dropdown-option" value='ARCHITECTURE'>Architecture</option>
                        <option className="projects-nav-dropdown-option" value='INTERIOR_DESIGN'>Interior Design</option>
                        <option className="projects-nav-dropdown-option" value='CONSTRUCTION'>Construction</option>
                    </select>
                </div>
            </div>

            <div className="projects-container">
                {props.projects.map(project=><FadeInContainer FadeIn={FadeInFromBottom} ><ProjectCard key={project.id} data={project} /></FadeInContainer>)}
            </div>
            
           

        </div>
    )
}

const mapStateToProps = (state)=>{

    return({
        projects: state.projects,
        backendUrl: state.backendUrl,
    })
}


export default connect(mapStateToProps)(Projects);