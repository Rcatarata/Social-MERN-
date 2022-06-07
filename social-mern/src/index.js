import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Users from './routes/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './routes/UserProfile';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="Login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:userId' element={<UserProfile/>} />
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
