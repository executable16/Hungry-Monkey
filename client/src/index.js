/*React Imports*/
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/*Bootstrap Imports*/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/*Redux Imports*/
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

/*Local Module Imports*/
import App from './App';
/*Creating a global store that will be handled by redux
  Creates a Redux store that holds the complete state tree of your app.
  There should only be a single store in your app.
*/

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
);


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals