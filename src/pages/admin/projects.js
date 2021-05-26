import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Projects = (props)=>{


    return(
        <Container fluid>
            {
                props.projects.map((project, index)=>(
                    <Row>{index}</Row>
                ))
            }

        </Container>
    )
}

export default Projects;