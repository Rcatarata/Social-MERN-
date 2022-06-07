import './styles/style.css';
import {Outlet, Link} from 'react-router-dom';
import Nav from './components/Nav';
import ViewUsers from './components/ViewUsers';
import {useState} from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  

  return (
    <div className='App'>
     <Nav />
     <Outlet />
     {/* <Link to='/users'>Users</Link> */}
     <ToastContainer />
    </div>
  );
}

export default App;
