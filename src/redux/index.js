import {combineReducers} from 'redux';
import productsReducer from './products/products.reducer';
import modalsReducer from './utils/modals/modals.reducer';
import userAuthReducer from './userAuthentication/userAuth.reducer';
import flashMessagesReducer from './utils/flashMessages/flashMessages.reducer';
import loaderReducer from './utils/loader/loader.reducer';
import projectImagesReducer from './firebase/images/project_images/images.reducer';
import loadImagesReducer from './loadImages';
import projectsReducer from './firebase/projects/projects.reducer';





//const BACKEND_URL = "https://backend.ayushmanarchitects.com";
const BACKEND_URL = "http://backend.ayushman.com:5000";


const rootReducer = combineReducers({products: productsReducer, modals: modalsReducer, 
                                    authentication: userAuthReducer, loadImages: loadImagesReducer,
                                    flashMessage: flashMessagesReducer, backendUrl: ()=>BACKEND_URL,
                                    loader: loaderReducer, projectImages: projectImagesReducer,
                                    projects: projectsReducer,
                                    });


export default rootReducer;
