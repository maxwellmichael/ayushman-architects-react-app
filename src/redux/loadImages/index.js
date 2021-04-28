import {combineReducers} from 'redux';
import buildingParallaxImagesReducer from './buildingParallaxImages/buildingParallaxImages.reducer';



const loadImagesReducer = combineReducers({buildingParallaxImages: buildingParallaxImagesReducer});


export default loadImagesReducer;
