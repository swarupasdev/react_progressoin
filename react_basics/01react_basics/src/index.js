import React from 'react';  //core foundational library
import ReactDOM from 'react-dom/client'; //an implementation to manipulate web dom 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
)