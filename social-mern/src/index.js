import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Users2 from './routes/Users2';
import Users from './routes/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User2Profile from './routes/User2Profile';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Dashboard from './routes/Dashboard';
import Unknown from './components/Unknown'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path='/' element= {<Dashboard />} />
            <Route path="Login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path='users' element={<Users />} />
            <Route path='users2' element={<Users2 />} />
            <Route path='users2/:userId' element={<User2Profile/>} />
            <Route path='*' element={<Unknown />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
