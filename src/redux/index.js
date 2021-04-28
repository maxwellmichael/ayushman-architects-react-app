import {combineReducers} from 'redux';
import productsReducer from './products/products.reducer';
import modalsReducer from './utils/modals/modals.reducer';
import userAuthReducer from './userAuthentication/userAuth.reducer';
import flashMessagesReducer from './utils/flashMessages/flashMessages.reducer';
import backendReducer from './backend/backend.reducer';
import loadImagesReducer from './loadImages';
import loaderReducer from './utils/loader/loader.reducer';





const rootReducer = combineReducers({products: productsReducer, modals: modalsReducer, 
                                    authentication: userAuthReducer, loadImages: loadImagesReducer,
                                    flashMessage: flashMessagesReducer, backend: backendReducer,
                                    loader: loaderReducer,
                                    });


export default rootReducer;
