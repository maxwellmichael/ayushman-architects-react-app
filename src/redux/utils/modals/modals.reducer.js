
let initialState = {
    modalType: null,
    hidden: true,
}

const modalsReducer = (state=initialState, action)=>{
    let newState = {...state};
    switch(action.type){

        case 'ADD_PRODUCT_FORM_MODAL':
            newState.modalType = "ADD_PRODUCT_FORM_MODAL";
            newState.hidden = false;
            return newState;

        case 'SET_MODALS_HIDDEN':
            newState.hidden = true;
            return newState;
        
        default:
            return {...state};


    }
}

export default modalsReducer;