import React, {Component} from 'react';
import {Spring} from 'react-spring/renderprops';
import Caurosel from '../components/miscellaneous/caurosel';
import BuildingParallax from '../components/miscellaneous/buildingParallax';

export default class Home extends Component{

    render(){

        return(
            <React.Fragment>
                
               <div className="home-main">
                    <div className="row home-banner">
                        <BuildingParallax />
                    </div>
                
                   <div className="home-content">
                       <div className="content-title">
                            <Spring from={{opacity:0, marginRight:-1000}} 
                                            to={{opacity:1, marginRight:0}}
                                            config={{delay:100, duration:1000}}
                                            >
                                        {(props=>(
                                            <div style={props}>
                                                <h1>Interior Designs</h1>
                                            </div>
                                            
                                        ))}
                            </Spring>
                           
                           <Spring from={{opacity:0, marginLeft:-1000}} 
                                    to={{opacity:1, marginLeft:0}}
                                    config={{delay:100, duration:1000}}
                                    >
                                {(props=>(
                                    <div style={props}>
                                        <div className="title-line"></div>
                                    </div>
                                    
                                ))}
                            </Spring>                          
                       </div>

                       <Spring from={{opacity:0, transform: 'translateY(-100px)'}} 
                                    to={{opacity:1, transform: 'translateY(0px)'}}
                                    config={{delay:100, duration:1000}}
                                    >
                                {(props=>(
                                    <div style={props}>
                                        <Caurosel />
                                    </div>
                                    
                                ))}
                        </Spring>
                </div>


               </div>
            </React.Fragment>
        )
    }

}
