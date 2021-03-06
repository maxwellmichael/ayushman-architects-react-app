import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import {config, useTransition, animated} from 'react-spring';
import {connect} from 'react-redux';
import { ReactComponent as Svglogo } from '../../images/ayushman_logo.svg';





const NewNavigation = (props)=>{

    const [menuToggle, setMenuToggle] = useState(false);
    const ServiceRoutes = [
        {
            path:'/services/architecture',
            name: "Architecture"
        },
        {
            path:'/services/interiordesign',
            name: "Interior"
        },
        {
            path:'/services/construction',
            name: "Construction"
        },
        {
            path:'/services/planning',
            name: "Planning"
        },
        {
            path:'/services/estimation',
            name: "Estimation"
        }

    ];

    const overlayTransition = useTransition(menuToggle, null, {
        from: {opacity: 0, transform: `translateX(-50vw)`},
        enter: {opacity: 1, transform: "translateX(0px)"},
        leave: {opacity: 0, transform: `translateX(-50vw)`},
        config: config.slow,
    })


    return(
        <React.Fragment>
             <nav id="navbar" className="">
                <div className="nav-wrapper">
                <div className="logo">
                <a href="/">
                    <Svglogo className="logo-image" />
                    <h1>AYUSHMAN</h1>
                    <h3>ARCHITECTS</h3>
                </a>
                </div>

                <ul id="menu">
                    <li><Link to="/">HOME</Link></li>
                    <li>
                        <div className="nav-dropdown">
                            <div className="dropdown-title">Services</div>
                            <div className="dropdown-list">
                                {ServiceRoutes.map((route, i)=><div className="item" key={i}><Link to={route.path}>{route.name}</Link></div>)}
                            </div>
                        </div>
                    </li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
               
               
            </div>
            </nav>

            <div className="menuIcon" onClick={()=>{setMenuToggle(!menuToggle)}}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

            {overlayTransition.map(({item, key, props: style})=>(
                item && <animated.div key={key} style={style} className="overlay-menu">
                        <ul id="menu">
                            <li><Link onClick={()=>setMenuToggle(false)} to="/">HOME</Link></li>
                            <li>
                                <div className="nav-dropdown">
                                    <div className="dropdown-title">Services</div>
                                    <div className="dropdown-list">
                                        {ServiceRoutes.map((route, i)=><div className="item" key={i}><Link onClick={()=>setMenuToggle(false)} to={route.path}>{route.name}</Link></div>)}
                                    </div>
                                </div>
                            </li>
                            <li><Link onClick={()=>setMenuToggle(false)} to="/projects">PROJECTS</Link></li>
                            <li><Link onClick={()=>setMenuToggle(false)} to="/about">ABOUT</Link></li>
                            <li><Link onClick={()=>setMenuToggle(false)} to="/contact">CONTACT</Link></li>
                            
                        </ul>
                </animated.div>
            ))}

        </React.Fragment>
    )

}


const mapStateToProps=(state)=>{
    return({
        isAuthenticated: state.authentication.user.isAuthenticated,
        backendUrl: state.backendUrl
    })
}

export default connect(mapStateToProps)(NewNavigation);