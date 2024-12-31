import reportWebVitals from './reportWebVitals';
import store from './Redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';









const root = ReactDOM.createRoot(document.getElementById('root'));

export let Render = (state) =>{

  root.render(
      <React.StrictMode>
    
        <BrowserRouter>
          <App state={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
        </BrowserRouter>
    
      </React.StrictMode>
    );
  }


  store.subscribe(Render)
  Render(store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
