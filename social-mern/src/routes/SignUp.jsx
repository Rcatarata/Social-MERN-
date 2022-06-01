import React from 'react'

export default function SignUp() {
  return (
    
    <div className='signup'>
        <div className='signup--container'>
        <h3>Sign Up</h3>
            <form action="" className='form--container'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
            </form>
        <button>Register</button>
        </div>
    </div>
  )
}
