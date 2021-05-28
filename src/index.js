import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';





const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

axios.interceptors.request.use((request)=>{
  console.log(request);
  return request;
})



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

