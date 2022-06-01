import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='signup'>
        <div className='signup--container'>
        <h3>Login</h3>
            <form action="" className='form--container'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
            </form>
        <button>Login</button>
        </div>
    </div>
    </div>
  )
}
