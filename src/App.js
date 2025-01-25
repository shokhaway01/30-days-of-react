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
            {/* Применик радио */}
            <Routes>
              <Route element={'Это главная страница, чтобы что-то отобразилось нажмите на Profile'} path='/'/>
              <Route element={<Dialogs state={props.state.DialogsPage} updateMessageText={props.updateMessageText} addMessage={props.addMessage}/>} path={"/dialogs/*"}/>
              <Route element={<Profile state={props.state.ProfilePage} updatePostText={props.updatePostText} addPost={props.addPost}/>}  path={"/profile/*"}/>
            </Routes>
          

          </div>

          <Footer/>
      </div>
  );
}


// API = application program inteface

 


export default App;
