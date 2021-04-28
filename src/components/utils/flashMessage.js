import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';
import {connect} from 'react-redux';
import {HIDE_FLASH_MESSAGES} from '../../redux/utils/flashMessages/flaskMessages.actions';


class FlashMessage extends Component{

        

    redirectUrl=()=>{
        setTimeout(()=>{
            if(this.props.flashMessage.shouldRedirect){
                this.props.history.push(this.props.flashMessage.redirectUrl);
            }
        }, 2000);
    }
    

    render(){
        return(
            <React.Fragment>
                {this.props.flashMessage.hidden ? null :
                    <Spring
                        from={{ opacity: 0, marginTop: '0vh' }}
                        to={{ opacity: 1, marginTop:'25vh' }}>
                        {props => 
                        <div style={props} className="flash_container">
                            <button onClick={()=>this.props.dispatch(HIDE_FLASH_MESSAGES())}><i className="fas fa-times"></i></button>
                            <div className="content">                        
                                <h1 className="title">{this.props.flashMessage.title}</h1>
                                <p className="message">{this.props.flashMessage.message}</p>
                                {this.redirectUrl()}
                            </div> 
                        </div>}
                    </Spring> 
                }   
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{

    return({
        flashMessage: state.flashMessage,
    });
}


export default withRouter(connect(mapStateToProps)(FlashMessage));