import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';
import {connect} from 'react-redux';
import {HIDE_FLASH_MESSAGES} from '../../redux/utils/flashMessages/flashMessages.actions';
import {ReactComponent as ExitIcon} from '../../images/icons/times-solid.svg';


class FlashMessage extends Component{
    

    redirectUrl=()=>{
        setTimeout(()=>{
            if(this.props.flashMessage.shouldRedirect){
                this.props.history.push(this.props.flashMessage.redirectUrl);
            }
        }, 200);
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
                            <button onClick={()=>this.props.dispatch(HIDE_FLASH_MESSAGES())}><ExitIcon className="icon" /></button>
                            <div className="content">                        
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