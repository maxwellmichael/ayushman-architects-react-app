import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import {connect} from 'react-redux';
import {UPDATE_AUTHENTICATED_USER_STATUS, SET_USER_AUTHENTICATED_IN_COOKIE} from "./redux/userAuthentication/userAuth.actions";
import {SET_LOADER} from './redux/utils/loader/loader.actions';
import axios from 'axios';
import Routes from './routes';
import Layout from './components/layout';
import FlashMessage from './components/utils/flashMessage';

class App extends Component{

  componentDidMount(){
    if(window.location.pathname==='/'){
      this.props.dispatch(SET_LOADER({isHidden: true}));
    }
    else{
      //prevents other paths from loading the images 
      this.props.dispatch(SET_LOADER({isHidden: true}));
    }
    this.props.dispatch(UPDATE_AUTHENTICATED_USER_STATUS());
  }


  axiosInterceptops=()=>{
    axios.interceptors.response.use(null, err => {
      const originalRequest = err.config;
      console.log('Response',err)
      
      if(err.response){

        //IF The Response is Unauthorized
        // Refresh Token Has Expired
        // User Must Login
        if(err.response.status === 404 && originalRequest.url === `${this.props.backendUrl}/refreshaccesstoken`){
          console.log('User MUST LOGIN');
          this.props.dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(false));
          return axios(originalRequest);
        }

        else if(err.response.status === 401 && originalRequest.url === `${this.props.backendUrl}/project`){
          console.log('User MUST LOGIN');
          this.props.dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(false));
        }

        // Access Token Has Expired 
        //Refreshes the Access Token
        else if(err.response.status === 401 && !originalRequest._retry && originalRequest.url!==`${this.props.backendUrl}/userlogin`){
          console.log('Access Token Expired for Request:', originalRequest);
          console.log(originalRequest.url)
          originalRequest._retry = true;
          return axios({
              method: 'get',
              url: `${this.props.backendUrl}/refreshaccesstoken`,
              withCredentials: true,
              headers:{
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': '*',
              }
          })
          .then(res=>{
            if(res.status===200){
              return axios(originalRequest);
            }
          })
          .catch(err=>{
            
          })
        }

      }

      else{
        console.log("Error Message:", err.message);
        //return axios(originalRequest);

        //this.props.dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(false));
        //const values = {message:"Please Login To Continue", shouldRedirect:true, redirectUrl:'/userauthenticate'}
        //this.props.dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values)); 

      }
     
      return Promise.reject(err)
    }
    
  );

  }


  render(){

    return(
      <React.Fragment>
        {this.axiosInterceptops()}
        <FlashMessage />
        <Layout>
          <Routes />
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state)=>{

  return({
    backendUrl: state.backendUrl,
  })
}


export default connect(mapStateToProps)(App);




