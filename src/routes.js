import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminPage from './pages/admin';
import Products from './pages/products'; 
import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/projects/project';
import AddProjectForm from './pages/projects/addProjectForm';
import ProtectedRoute from './components/authorisation/ProtectedRoutes';
import AuthenticationForms from './pages/authentication';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import RoutesWithSubRoutes from './components/utils/RouteWithSubRoutes';




const Routes = ()=>{

    const ServiceRoutes = [
        {
            path:'/services/architecture',
            component: Home
        },
        {
            path:'/services/interiordesign',
            component: Home
        },
        {
            path:'/services/construction',
            component: Home
        },
        {
            path:'/services/planning',
            component: Home
        },
        {
            path:'/services/estimation',
            component: Home
        }

    ];

    return(
            <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/contact" exact component={ContactPage} />
                  <Route path="/about" exact component={AboutPage} />
                  <ProtectedRoute path="/productsstore" exact component={Products} />
                  <Route path="/projects" exact component={Projects} />
                  <Route path="/project" exact render={props=>(<Project props={props}/>)} />
                  <Route path="/newproject" exact component={AddProjectForm} />
                  <Route path="/userauthenticate" exact render={props=>(<AuthenticationForms props={props}/>)} />
                  <Route path="/admin" exact component={AdminPage} />
                  {ServiceRoutes.map((route, i)=><RoutesWithSubRoutes key={i} {...route} />)}
            </Switch>
    )
}

export default Routes;