http://backend.ayushmanarchitects.com/
let initialState = {
    subdomain: "backend",
    domain:"ayushmanarchitects.com",
    port: "80",
    url: null,
}

const backendReducer = (state=initialState, action)=>{

    let newState = {...state};
    switch(action.type){

        case 'UPDATE_BACKEND_URL':
            newState.subdomain=action.payload.subdomain;
            newState.domain=action.payload.domain;
            newState.port=action.payload.port;
            newState.url =`http://${action.payload.subdomain}.${action.payload.domain}`;
            return newState;

        case 'SET_BACKEND_URL':
            newState.url =`http://${state.subdomain}.${state.domain}`;
            return newState;

        default:
            return newState;



    }
}


export default backendReducer;