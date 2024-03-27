import './App.css';

import Header from './components/header';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
    <div className='all'>
      <Header />
      <div className='body'>
        <Navbar />
        <Main />  
      </div>
    </div>
  );
}

export default App;
