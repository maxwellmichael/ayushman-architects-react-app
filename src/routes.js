import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import AdminPage from './pages/admin';
import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/projects/project';
import AddProjectForm from './pages/projects/addProjectForm';
import AuthenticationForms from './pages/authentication';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import RoutesWithSubRoutes from './components/utils/RouteWithSubRoutes';
import {AnimatePresence} from 'framer-motion';
import ArchitecturePage from './pages/services/architecture';
import InteriorDesignPage from './pages/services/interiordesign';
import ConstructionPage from './pages/services/construction';
import PlanningPage from './pages/services/planning';
import EstimationPage from './pages/services/estimation';








const Routes = ()=>{

    const location = useLocation();

    const ServiceRoutes = [
        {
            path:'/services/architecture',
            component: ArchitecturePage
        },
        {
            path:'/services/interiordesign',
            component: InteriorDesignPage
        },
        {
            path:'/services/construction',
            component: ConstructionPage
        },
        {
            path:'/services/planning',
            component: PlanningPage
        },
        {
            path:'/services/estimation',
            component: EstimationPage
        }

    ];

    return(
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                  <Route path="/" exact component={Home} />
                  <Route path="/contact" exact component={ContactPage} />
                  <Route path="/about" exact component={AboutPage} />
                  {/*
                  import ProtectedRoute from './components/authorisation/ProtectedRoutes';
                  <ProtectedRoute path="/productsstore" exact component={Products} />*/}
                  <Route path="/projects" exact component={Projects} />
                  <Route path="/project" exact render={props=>(<Project props={props}/>)} />
                  <Route path="/newproject" exact component={AddProjectForm} />
                  <Route path="/userauthenticate" exact render={props=>(<AuthenticationForms props={props}/>)} />
                  <Route path="/admin" exact component={AdminPage} />
                  {ServiceRoutes.map((route, i)=><RoutesWithSubRoutes key={i} {...route} />)}
            </Switch>
        </AnimatePresence>
    )
}

export default Routes;