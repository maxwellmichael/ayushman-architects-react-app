
let initialState = {
    subdomain: "nameless-tor-63252",
    domain:"herokuapp.com",
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
            newState.url =`https://www.${action.payload.subdomain}.${action.payload.domain}`;
            return newState;

        case 'SET_BACKEND_URL':
            newState.url =`https://www.${state.subdomain}.${state.domain}:${state.port}`;
            return newState;

        default:
            return newState;



    }
}


export default backendReducer;