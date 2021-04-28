
let initialState = {
    hidden: true,
    title: null,
    message: null,
    shouldRedirect: false,
    redirectUrl: null,
}

const flashMessagesReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){

        case 'HIDE_FLASH_MESSAGES':
            newState.hidden = true;
            return newState;

        case 'SHOW_FLASH_MESSAGES':
            newState.hidden = false;
            return newState;
        
        case 'SET_FLASH_MESSAGE':
            newState.title = action.payload.title;
            newState.message = action.payload.message;
            newState.shouldRedirect = action.payload.shouldRedirect;
            newState.redirectUrl = action.payload.redirectUrl;
            return newState

        default:
            return newState;

    }
}


export default flashMessagesReducer;