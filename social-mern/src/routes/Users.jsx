// import {useEffect} from 'react'
// import {useNavigate} from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'
// import Spinner from '../components/Spinner'
// import { getUsers, reset } from '../features/auth/authSlice'

// export default function Users() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const {user} = useSelector((state) => state.auth)
//   const {users, isLoading, isError, message} = useSelector((state) => state.auth)

  
//   useEffect(() => {
//     if (isError) {
//       console.log(message);
//     }
//     if (!user) {
//       navigate('/login');
//     }
//   }, [isError, message, user, navigate]);

//   useEffect(() => {
//     dispatch(getUsers());

//     return () => dispatch(reset());
//   }, [dispatch]);


//   if(isLoading) {
//     return <Spinner />
//   }



//   return (
//     <div className='user'>
//        <h1>Users</h1>
//        <div className='dash--container'>
//         <section className=''>
//           <h1>Welcome {user && user.name}</h1> 
//           <p>Lets Talk About it</p>
//         </section>
//         {/* {users.map((users) => (
//               <div>
//                 <p>{users}</p>
//                 <p></p>
//               </div> ))} */}

             
//     </div>
//     </div>
//   )
// }
