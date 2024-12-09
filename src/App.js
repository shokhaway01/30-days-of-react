import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

function App(props) {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          
          <div className='app-wrapper-content'>
            
            <Routes>
              <Route element={'Это главная страница, чтобы что-то отобразилось нажмите на Profile'} path='/'/>
              <Route element={<Dialogs MessagesData={props.MessagesData} DialogsData={props.DialogsData}/>} path={"/dialogs/*9999999"}/>
              <Route element={<Profile postData={props.postData}/>} path={"/profile/*"}/>
            </Routes>
          

          </div>

          <Footer/>
      </div>
  );
}


export default App;
