import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from './pages/products'; 
import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/projects/project';
import AddProjectForm from './pages/projects/addProjectForm';

import ProtectedRoute from './components/authorisation/ProtectedRoutes';
import AuthenticationForms from './pages/authentication';
import ContactPage from './pages/contact';
import Layout from './components/layout';
import {connect} from 'react-redux';
import {UPDATE_AUTHENTICATED_USER_STATUS, SET_USER_AUTHENTICATED_IN_COOKIE} from "./redux/userAuthentication/userAuth.actions";
import {SET_LOADER} from './redux/utils/loader/loader.actions';
import axios from 'axios';







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
      console.log('Response Error',err)
      //IF The Response is Unauthorized
      // Refresh Token Has Expired
      // User Must Login
      if(err.response.status === 401 && originalRequest.url === `${this.props.backendUrl}/refreshaccesstoken`){
         console.log('User MUST LOGIN',err);
         this.props.dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(false));
      }
  
      // Access Token Has Expired 
      //Refreshes the Access Token
      else if(err.response.status === 401 && !originalRequest._retry){
        console.log('Access Token Expired for Request:', originalRequest);
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
          console.log(err);
        })
      }
     
      return Promise.reject(err)
    }
    
  );

  }


  render(){

    return(
      <React.Fragment>
        <Router>
            <Switch>
                <Layout>
                  <Route path="/" exact render={props=>(<Home/>)} />
                  <Route path="/contact" exact render={props=>(<ContactPage/>)} />
                  <Route path="/projects" exact render={props=>(<Projects/>)} />
                  <Route path="/newproject" exact render={props=>(<AddProjectForm/>)} />
                  <ProtectedRoute path="/productsstore" exact component={Products} />
                  <Route path="/project" exact render={props=>(<Project props={props}/>)} />
                  <Route path="/userauthenticate" exact render={props=>(<AuthenticationForms props={props}/>)} />
                </Layout>
            </Switch>
        </Router>
        {this.axiosInterceptops()}
      </React.Fragment>
    );
  }
}


export default connect()(App);




