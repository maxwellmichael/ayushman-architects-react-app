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
                    {/* If The User is Not Authenticated The User is Sent to the Login Page */}
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