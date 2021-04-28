
const initialState = {
    aeroplaneImage: false,
    building1Image: false,
    building2Image: false,
    skyImage: false,
    allImagesLoaded: false,
    loadedPercent: 0,
}


const buildingParallaxImagesReducer = (state=initialState, action)=>{

    let newState = {...state};

    switch(action.type){

        case 'SET_AEROPLANE_IMAGE_LOADED':
            newState.aeroplaneImage=action.payload;
            newState.loadedPercent=newState.loadedPercent+25;
            return newState;

        case 'SET_BUILDING1_IMAGE_LOADED':
            newState.building1Image=action.payload;
            newState.loadedPercent=newState.loadedPercent+25;
            return newState;
        
        case 'SET_BUILDING2_IMAGE_LOADED':
            newState.building2Image=action.payload;
            newState.loadedPercent=newState.loadedPercent+25;
            return newState;
        
        case 'SET_SKY_IMAGE_LOADED':
            newState.skyImage=action.payload;
            newState.loadedPercent=newState.loadedPercent+25;
            return newState;

        case 'UPDATE_ALL_IMAGES_LOADED':
            if(newState.skyImage && newState.aeroplaneImage && newState.building1Image && newState.building2Image){
                newState.allImagesLoaded=true;
                return newState
            }
            else{
                return newState
            }
        
        default:
            return newState

    }
}


export default buildingParallaxImagesReducer;