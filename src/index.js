import React from 'react';
import ReactDOM from 'react-dom';
import { initializeParse } from '@parse/react';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const {
  REACT_APP_PARSE_APPLICATION_ID,
  REACT_APP_PARSE_LIVE_QUERY_URL,
  REACT_APP_PARSE_JAVASCRIPT_KEY,
} = process.env;

// Your Parse initialization configuration goes here
const PARSE_LIVE_QUERY_URL = REACT_APP_PARSE_LIVE_QUERY_URL;
const PARSE_APPLICATION_ID = REACT_APP_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = REACT_APP_PARSE_JAVASCRIPT_KEY;
// Initialize parse using @parse/react instead of regular parse JS SDK
initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
