import './styles/style.css';
import {Outlet, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
// import Expenses from './routes/Expenses';
// import Invoices from './routes/Invoices';

function App() {
  return (
    <div className='App'>
     <h1>Better Books</h1>
     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
