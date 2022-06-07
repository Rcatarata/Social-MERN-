import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '', 
    password2: '',
  })

  const {name, email, password, password2} =formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, email, password
      }
      dispatch(register(userData))
    }
  }


  if (isLoading) {
    return <Spinner />
  }

  return (
    
    <div className='signup'>
        <div className='signup--container'>
        <h3>Sign Up</h3>
            <form onSubmit={onSubmit} className='form--container'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={name} onChange={onChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={email} onChange={onChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password'  value={password} onChange={onChange}/>
                <label htmlFor="password2">Password</label>
                <input type="password" id='password' name='password2' value={password2} onChange={onChange}/>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}
