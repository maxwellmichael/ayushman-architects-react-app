import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';



const ProtectedRoute =({component:Component, ...rest})=>{
    
    let props = {...rest};
    return(
        <Route 
            {...rest} 
            render={insideProps=>{
                if(props.isAuthenticated){
                    return <Component {...insideProps} />
                }
                else{       
                    return <Redirect to={{
                        pathname: "/userauthenticate",
                        state: {
                            from: insideProps.location
                        }
                    }} 
                    />
                }
                
            }}
        />
    )

}

const mapStateToProps=(state)=>{
    return({
        isAuthenticated: state.authentication.user.isAuthenticated,
    })
}

export default connect(mapStateToProps)(ProtectedRoute);