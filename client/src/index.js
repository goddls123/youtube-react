import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './components/service/youtube';


// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const youtube = new Youtube('AIzaSyAwCJWGqNRvznqCkCbpRPsM9byCIzGHiAA');


ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
