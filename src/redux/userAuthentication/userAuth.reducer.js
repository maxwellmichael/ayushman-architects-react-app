
let initialState={
    user:{
        isAuthenticated: localStorage.getItem('isAuthenticated'),
    },
    form:{
        isLogin: false,
    }
}


const userAuthReducer = (state=initialState, action)=>{
    switch(action.type){

        case 'USER_AUTHENTICATION_FORM_SET_LOGIN':
            let newState = {...state};
            newState.form.isLogin = action.payload;
            return newState;
        
        case 'SET_USER_AUTHENTICATED':
            let nState = {...state};
            nState.user.isAuthenticated = action.payload;
            return nState;

        default:
            return {...state};
    }
}


export default userAuthReducer;