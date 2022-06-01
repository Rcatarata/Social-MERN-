import React from 'react'
import { Link, Outlet} from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav--bar'>
        <Link className='link' to='/'><h1>Better books</h1></Link>
        <ul className='nav--list'>
            {/* <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li> */}
            <Link to='/login' className='link'><li>Login</li></Link>
            <Link to='/SignUp' className='link'><li>Sign Up</li></Link>
        </ul>
    </div>
  )
}
