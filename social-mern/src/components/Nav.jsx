import React from 'react'
import { Link, Outlet, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

export default function Nav() {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className='nav--bar'>
        <Link className='link' to='/'><h1>Better books</h1></Link>
        <ul className='nav--list'>
        {user?
            <li className ='link' onClick={onLogout}>Logout</li>:(<>
            <Link to='/login' className='link'><li>Login</li></Link>
            <Link to='/SignUp' className='link'><li>Sign Up</li></Link></>)
        }  
        </ul>
    </div>
  )
}
