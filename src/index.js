import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let DialogsData = [
  { id: 1, name: "Shohjaxon" },
  { id: 2, name: "Aleksandr" },
  { id: 3, name: "Mamlakat" },
  { id: 4, name: "Otabek" },
  { id: 5, name: "Shayxislomjon" }
]

let MessagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Broo whosap" },
  { id: 3, message: "yo" },
  { id: 4, message: "poshli osh" },
  { id: 5, message: "ti ochen bolshoy molodets" }
]

let postData = [
  {id:1, message:"Hello",likesCount:15},
  {id:2, message:"Aslonov 5-6ta chiqib qolar dedi",likesCount:20},
  {id:3, message:"Shoh u're awesome",likesCount:30},
  {id:4, message:"I,m your fan!!",likesCount:990},
  {id:5, message:"lorem ipsum dolor sit amet vinca visca barcs visca cataloniya",likesCount:0},
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App postData={postData} DialogsData={DialogsData} MessagesData={MessagesData}/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
