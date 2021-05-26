import React from 'react';
import {Container} from 'react-bootstrap'
import AdminNav from './adminNav'

const AdminPage = (props)=>{

    return(
        <Container fluid style={{margin:0, padding:0, width: '100%'}}>
            <AdminNav/>
            {props.children}
        </Container>
        
    )
}

export default AdminPage
