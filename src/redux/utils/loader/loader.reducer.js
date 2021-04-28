
const initialState={
    isHidden: false,
    loadedPercentage: null,
    message: null,
}


const loaderReducer = (state=initialState, action)=>{
    let newState = {...state};

    switch(action.type){


        case 'SET_LOADER':
            newState.isHidden=action.payload.isHidden;
            newState.loadedPercentage=action.payload.loadedPercentage;
            newState.message=action.payload.message;
            return newState;

        default:
            return newState;

    }
}

export default loaderReducer;