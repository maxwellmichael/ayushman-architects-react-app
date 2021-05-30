
let initialState = [];


const projectImagesReducer = (state=initialState, action)=>{
    let images = [...state];
    switch(action.type){

        case 'ADD_IMAGE':
            images.push(action.payload.image);
            return images;
        
        case 'CLEAR_IMAGES':
            return [];

        default:
            return [...state];

    }
}

export default projectImagesReducer;