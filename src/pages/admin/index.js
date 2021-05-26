import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Card} from 'react-bootstrap'

const AdminPage = (props)=>{

    return(
        <Container fluid style={{margin:0, padding:0, width: '100%'}}>
            <Row style={{margin:0, padding:0}}>
                <Col>
                    <Card bg='info' text='dark' style={{ width: '350px', height: '250px', margin: 'auto'}}>
                        <Card.Header>Projects</Card.Header>
                        <Card.Body>
                        <Card.Title>Admin Projects Control Panel</Card.Title>
                        <Card.Text>
                            Create, Edit and Remove Projects
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg='info' text='dark' style={{ width: '350px', height: '250px', margin: 'auto'}}>
                        <Card.Header>Projects</Card.Header>
                        <Card.Body>
                        <Card.Title>Admin Projects Control Panel</Card.Title>
                        <Card.Text>
                            Create, Edit and Remove Projects
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}


const mapStateToProps = (state)=>{

    return({
        backendUrl: state.backendUrl,
    })

}

export default connect(mapStateToProps)(AdminPage)
