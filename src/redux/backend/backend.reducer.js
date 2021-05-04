
let initialState = {
    subdomain: "backend",
    domain:"ayushman.com",
    port: "5000",
    url: null,
}

const backendReducer = (state=initialState, action)=>{

    let newState = {...state};
    switch(action.type){

        case 'UPDATE_BACKEND_URL':
            newState.subdomain=action.payload.subdomain;
            newState.domain=action.payload.domain;
            newState.port=action.payload.port;
            newState.url =`http://www.${action.payload.subdomain}.${action.payload.domain}:${action.payload.port}`;
            return newState;

        case 'SET_BACKEND_URL':
            newState.url =`http://www.${state.subdomain}.${state.domain}:${state.port}`;
            return newState;

        default:
            return newState;



    }
}


export default backendReducer;