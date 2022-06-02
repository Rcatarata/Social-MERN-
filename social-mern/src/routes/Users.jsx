import {React, useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Users() {
  const userUrl = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch(userUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <div className='user'>
       <h1>Users</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul className='user--container'>
        {data &&
          data.map(({ name, id, website, phone }) => (
            <li key={id}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="80" height="80" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <desc>Download more icon variants from https://tabler-icons.io/i/user</desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
              <p>{name}</p>
              <p>{phone}</p>
              <p>{website}</p>
              <Link to={`/users/${id}`} key={id}><p>View Profile</p></Link>
            </li>
          ))}
      </ul>
      {/* <p>{data[0].name}</p> */}
      <Outlet />
    </div>
  )
}
