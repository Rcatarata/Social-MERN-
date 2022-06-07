import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TalkItem from '../components/TalkItem'
import TalkForm from '../components/TalkForm'
import Spinner from '../components/Spinner'
import { getTalks, reset } from '../features/talks/talkSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {talks, isLoading, isError, message} = useSelector((state) => state.talks)

  
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
  }, [isError, message, user, navigate]);

  useEffect(() => {
    dispatch(getTalks());

    return () => dispatch(reset());
  }, [dispatch]);


  if(isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1> 
        <p>Talk Dashboard</p>
      </section>
      <TalkForm />
      <section className="content">
        {talks.length > 0 ? (
          <div className='goals'>
            {talks.map((talk) => (
              <TalkItem key={talk._id} talk={talk} />
            ))}
          </div>
        ): (<h3>There are no goals</h3>)}
      </section>
    </>
  )
}

export default Dashboard
