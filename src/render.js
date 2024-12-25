import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { addPost, addMessage } from './Redux/state.js'



export let Render = (state) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
    
        <BrowserRouter>
          <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>
    
      </React.StrictMode>
    );
  }