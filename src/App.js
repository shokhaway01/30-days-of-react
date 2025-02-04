import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';




function App(props) {

  

  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          
          <div className='app-wrapper-content'>
            {/* Применик радио */}
            <Routes>
              <Route element={'Это главная страница, чтобы что-то отобразилось нажмите на Profile'} path='/'/>
              <Route element={<DialogsContainer/>} path={"/dialogs/*"}/>
              <Route element={<Profile/>}  path={"/profile/*"}/>
            </Routes>
          

          </div>

          <Footer/>
      </div>
  );
}


// API = application program inteface

 


export default App;
