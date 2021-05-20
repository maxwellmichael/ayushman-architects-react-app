import axios from 'axios';
import Cookies from 'js-cookie';
import {FLASH_A_MESSAGE_AND_REDIRECT, FLASH_A_MESSAGE} from '../utils/flashMessages/flashMessages.actions';




export const USER_AUTHENTICATION_FORM_SET_LOGIN=(data)=>{

    return({
        type: 'USER_AUTHENTICATION_FORM_SET_LOGIN',
        payload: data,
    })
}




export const USER_LOGOUT = (data)=>(dispatch)=>{
    axios({
        method: 'delete',
        url: `${data.backendUrl}/userlogout`,
        withCredentials: true,
        headers:{
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': '*',
          'X-CSRF-TOKEN-ACCESS': Cookies.get('csrf_access_token'),

        }
    })
    .then(resp=>{
        if(resp.status===200){
            console.log("Logout Success");
            dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(false));
            const values = {type:'NEUTRAL', message:"You Have been Logged Out", shouldRedirect:true, redirectUrl:'/userauthenticate'}
            dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values)); 
        }
    })
    .catch(err=>{
        const values = {type:'ERROR', message:"An Error as Occured please Retry"}
        dispatch(FLASH_A_MESSAGE(values)); 
        console.log(err)
    })

}




export const USER_LOGIN = (data)=>(dispatch)=>{

    data.event.preventDefault()
    let bodyFormData = new FormData();
    bodyFormData.append('email', data.email);
    bodyFormData.append('password', data.password);

    axios({
        method: 'post',
        url: `${data.backendUrl}/userlogin`,
        data: bodyFormData,
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
        },
    })
    .then(res=>{
        const csrf_access_token = Cookies.get('csrf_access_token');
        if(res.status===200 && csrf_access_token){
            console.log("Login success", res);
            const values = {title:"Login Success", message:"You Have Successfully Logged In", shouldRedirect:true, redirectUrl:'/'}
            dispatch(SET_USER_AUTHENTICATED_IN_COOKIE(true));
            dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values)); 
        }
        // If Response is 200 but didnt receive CSRF Tokens Retry Login
        else{
          console.log('Didnt Receive CSRF Tokens');
          const values = {type:'ERROR' ,message:"There Seems to be an Error while Accessing a Cookie Please Try Restarting your Browser"}
          dispatch(FLASH_A_MESSAGE(values)); 

        }
    })
    .catch(err=>{
        /* If The Error contains a Response*/
        if(err.response){
            console.log('RETRY LOGIN');
            const values = {type:'ERROR', message: err.response.data.message}
            dispatch(FLASH_A_MESSAGE(values));
        }
        /* If the Error Does not Contain a Response(Mainly Network Error) */
        else{
            console.log(err);
            const values = {type:'ERROR', message: 'Couldnt Connect to Network'};
            dispatch(FLASH_A_MESSAGE(values));
        }
      })
}


export const USER_REGISTER = (data)=>(dispatch)=>{

    data.event.preventDefault()
    let bodyFormData = new FormData();
    bodyFormData.append('name', data.name);
    bodyFormData.append('email', data.email);
    bodyFormData.append('password', data.password);

    axios({
        method: 'post',
        url: `${data.backendUrl}/userregister`,
        data: bodyFormData,
        headers:{
            'Content-Type': 'multipart/form-data'
          }})
    .then(res=>{
        if(res.status===200){
            console.log('Successfully Registered')
            dispatch(USER_AUTHENTICATION_FORM_SET_LOGIN(true))
        }
        else{
            console.log(res.data)
        }
    })
    .catch(err=>{
        if(err.response){
            const values = {type:'ERROR', message:err.response.data.message};
            dispatch(FLASH_A_MESSAGE(values));
        }
        else{
            console.log(err)
        }
    })

}

export const SET_USER_AUTHENTICATED_IN_COOKIE =(value)=>(dispatch)=>{
    localStorage.setItem('isAuthenticated', value)    
    dispatch(SET_USER_AUTHENTICATED(value));

}

// Sets the isAuthenticated value in REDUX State
export const SET_USER_AUTHENTICATED = (value)=>{

    return({
        type: "SET_USER_AUTHENTICATED",
        payload: value,
    })
}

export const UPDATE_AUTHENTICATED_USER_STATUS = ()=>(dispatch)=>{

    let isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if(isAuthenticated==="true"){
        dispatch(SET_USER_AUTHENTICATED(true));
    }
    else if(isAuthenticated==="false"){
        dispatch(SET_USER_AUTHENTICATED(false));
    }
    else{
        dispatch(SET_USER_AUTHENTICATED(false));
    }
}


