import React, {Component} from 'react';
import Navigation from './navigation';
import Footer from './footer';
import {connect} from 'react-redux';
import Loader from "../utils/loader";

import {UPDATE_AUTHENTICATED_USER_STATUS} from '../../redux/userAuthentication/userAuth.actions';


class Layout extends Component{

    state = {
        showFooter: false,
    }

    componentWillUnmount(){
        this.setState({showFooter:false})
    }

    componentDidMount(){
        this.props.dispatch(UPDATE_AUTHENTICATED_USER_STATUS);
        this.setState({showFooter:true})
    }

    render(){


        return(
            <div className="layout-main">
                <Loader />
                <Navigation />
                {this.props.children}
                {this.state.showFooter ? <Footer/> : null}
            </div>

        );
    }
}

export default connect()(Layout);