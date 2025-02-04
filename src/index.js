import reportWebVitals from './reportWebVitals';
import store from './Redux/reduxStore.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';









const root = ReactDOM.createRoot(document.getElementById('root'));

export let Render = (state) =>{

  root.render(
      <React.StrictMode>
    
        <BrowserRouter>
          <Provider store={store}>
          <App/>
          </Provider>
        </BrowserRouter>
    
      </React.StrictMode>
    );
  }


  
  store.subscribe(() => {
    let state = store.getState();
    Render(state)
  })
  Render(store.getState())
reportWebVitals();
