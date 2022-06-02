import './styles/style.css';
import {Outlet, Link} from 'react-router-dom';
import Nav from './components/Nav';
import ViewUsers from './components/ViewUsers';
import {useState} from 'react'


function App() {
  

  return (
    <div className='App'>
     <Nav />
     <Outlet />
     {/* <Link to='/users'>Users</Link> */}
    </div>
  );
}

export default App;
