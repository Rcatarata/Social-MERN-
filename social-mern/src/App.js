import './styles/style.css';
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  

  return (
    <div className='App'>
     <Nav />
     <Outlet />
     <ToastContainer />
    </div>
  );
}

export default App;
