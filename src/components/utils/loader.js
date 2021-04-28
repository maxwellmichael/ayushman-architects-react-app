import React, {Component} from 'react';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';




class Loader extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                {this.props.loader.isHidden?null:
                <div className="e-container">
                    <div className="e-loadholder">
                        <div className="m-loader">
                            <span className="e-text">{this.props.imagesLoadedPercent}%</span>
                            
                        </div>
                    </div>
                    <Particles id="particleCanvas" />
                </div>
                }
            </React.Fragment>
          );
    }
}
 

const mapStateToProps=(state)=>{

    return({
        loader: state.loader,
        imagesLoadedPercent: state.loadImages.buildingParallaxImages.loadedPercent,
    })
}

export default connect(mapStateToProps)(Loader);