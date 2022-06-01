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
              <p>{name}</p>
              <p>{phone}</p>
              <p>{website}</p>
              <Link to={`/users/${id}`} key={id}><p>View Profile</p></Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  )
}
