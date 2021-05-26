import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import {config, useTransition, animated} from 'react-spring';
import {connect} from 'react-redux';
import {USER_LOGOUT} from '../../redux/userAuthentication/userAuth.actions';
import { ReactComponent as Svglogo } from '../../images/ayushman_logo.svg';





const NewNavigation = (props)=>{

    const [menuToggle, setMenuToggle] = useState(false);

    const overlayTransition = useTransition(menuToggle, null, {
        from: {opacity: 0, transform: `translateX(-50vw)`},
        enter: {opacity: 1, transform: "translateX(0px)"},
        leave: {opacity: 0, transform: `translateX(-50vw)`},
        config: config.slow,
    })


    return(
        <React.Fragment>
             <nav id="navbar" style={{marginBottom:'100px'}}>
                <div className="nav-wrapper">
                <div className="logo">
                <a href="/">
                    <Svglogo className="logo-image" />
                    <h1>AYUSHMAN</h1>
                    <h3>ARCHITECTS</h3>
                </a>
                </div>

                <ul id="menu">
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/newproject">New Project</Link></li>
                    <li>{props.isAuthenticated ? <Link onClick={()=>props.dispatch(USER_LOGOUT({backendUrl:props.backendUrl}))} to="/userauthenticate">Logout</Link> : null}</li>
                    <li>{!props.isAuthenticated ? <Link to="/userauthenticate">Login/SignUp</Link>:null}</li>
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
                        <li><Link onClick={()=>setMenuToggle(false)} to="/admin">Admin</Link></li>
                        <li><Link onClick={()=>setMenuToggle(false)} to="/newproject">New Project</Link></li>
                        <li>{props.isAuthenticated ? <Link onClick={()=>{setMenuToggle(false); props.dispatch(USER_LOGOUT({backendUrl: props.backendUrl}))}} to="/userauthenticate">Logout</Link> : null}</li>
                        <li>{!props.isAuthenticated ? <Link onClick={()=>setMenuToggle(false)} to="/userauthenticate">Login/SignUp</Link>:null}</li>
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