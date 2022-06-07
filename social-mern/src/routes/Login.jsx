import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


export default function Login() {
  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
  })

  const {email, password} = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error('Email or password incorrect. Please try again')
    }
    if(isSuccess||user) {
      navigate('/users')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value, 
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      email, password,
    }

    dispatch(login(userData))
  }


  return (
    <div>
        <div className='signup'>
        <div className='signup--container'>
        <h3>Login</h3>
            <form  onSubmit={onSubmit}  className='form--container'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={email} onChange={onChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' value={password} onChange={onChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}
