import React, {Component} from 'react';
import {Spring, config} from 'react-spring/renderprops';
import {connect} from 'react-redux';
import {USER_AUTHENTICATION_FORM_SET_LOGIN, USER_LOGIN, USER_REGISTER} from '../redux/userAuthentication/userAuth.actions';


class AuthenticationForms extends Component{


    state = {
        name:"",
        email:"",
        password:"",
        isLogin: false,
    }

    

    componentDidMount(){
        console.log('autheticated: ', this.props.isAuthenticated)
    }


    setName=(event)=>{
        this.setState({name:event.target.value});
    }

    setEmail=(event)=>{
        this.setState({email:event.target.value});
    }

    setPassword=(event)=>{
        this.setState({password:event.target.value});
    }

    LoginForm =()=>{
        return(
            <React.Fragment>
                <Spring
                    from={{ opacity: 0, transform: 'translateY(-100vh)'}}
                    to={{ opacity: 1, transform: 'translateY(0)'}}
                    config={config.slow}
                    >
                    {props => 
                    <div style={props}>
                        <form onSubmit={(event)=>{this.props.dispatch(USER_LOGIN({event:event, email:this.state.email, password:this.state.password, backendUrl:this.props.backendUrl}))}} className="register-form">
                            <h1>Login</h1>
                            <div className="form-input-material">
                                <label htmlFor="email">Email</label>
                                <input onChange={this.setEmail} type="email" name="email" id="email" placeholder=" " autoComplete="false" className="form-control-material" required />
                            </div>
                            <div className="form-input-material">
                                <label htmlFor="password">Password</label>
                                <input onChange={this.setPassword} type="password" name="password" id="password" placeholder=" " autoComplete="false" className="form-control-material" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-ghost">Login</button>
                            <p style={{textAlign:'center'}}>or</p>
                            <button onClick={()=>this.props.dispatch(USER_AUTHENTICATION_FORM_SET_LOGIN(false))} className="btn btn-primary btn-ghost">Register</button>
                        </form>
                        
                    </div>
                    }
                </Spring>
            </React.Fragment>
        )
    }


    RegisterForm =()=>{
        return(
            <React.Fragment>
                <Spring
                    from={{ opacity: 0, transform: 'translateY(-100vh)'}}
                    to={{ opacity: 1, transform: 'translateY(0)'}}
                    config={config.slow}
                    >
                    {props => 
                    <div style={props}>
                        <form onSubmit={(event)=>{this.props.dispatch(USER_REGISTER({event:event, name:this.state.name, email:this.state.email, password:this.state.password,  backendUrl:this.props.backendUrl}))}} className="login-form" >
                            <h1>Register</h1>
                            <div className="form-input-material">
                                <label htmlFor="username">Username</label>
                                <input onChange={this.setName} type="text" name="username" id="username" placeholder=" " autoComplete="false" className="form-control-material" required />
                            </div>
                            <div className="form-input-material">
                                <label htmlFor="email">Email</label>
                                <input onChange={this.setEmail} type="email" name="email" id="email" placeholder=" " autoComplete="false" className="form-control-material" required />
                            </div>
                            <div className="form-input-material">
                                <label htmlFor="password">Password</label>
                                <input onChange={this.setPassword} type="password" name="password" id="password" placeholder=" " autoComplete="false" className="form-control-material" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-ghost">Register</button>
                            <p style={{textAlign:'center'}}>or</p>
                            <button onClick={()=>this.props.dispatch(USER_AUTHENTICATION_FORM_SET_LOGIN(true))}  className="btn btn-primary btn-ghost">Login</button>
                        </form>
                    </div>
                    }
                </Spring>
                
            </React.Fragment>
        )
    }


    render(){
        return(
            <React.Fragment>
                <div className="mobile-form-main">
                    {this.props.isLogin ? this.LoginForm() : this.RegisterForm()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{

    return({
        isLogin: state.authentication.form.isLogin,
        isAuthenticated: state.authentication.user.isAuthenticated,
        backendUrl: state.backendUrl,
    })

}


export default connect(mapStateToProps)(AuthenticationForms);