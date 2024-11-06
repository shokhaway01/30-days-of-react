import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';

function App() {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <Profile/>
          <Footer/>
      </div>
  );
}


export default App;
