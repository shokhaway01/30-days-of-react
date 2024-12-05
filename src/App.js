import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          
          <div className='app-wrapper-content'>
            
            <Routes>
              <Route element={<Dialogs/>} path={"/dialogs/*"}/>
              <Route element={<Profile/>} path={"/profile/*"}/>
            </Routes>
          

          </div>

          <Footer/>
      </div>
  );
}


export default App;
