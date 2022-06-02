import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    let params =  useParams();
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

    
    const actualId = parseInt(params.userId) - 1
    console.log(actualId)
    return (

    <div>
       <div className='user'>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul className='user--container'>
        {data &&
        <div>
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <desc>Download more icon variants from https://tabler-icons.io/i/user</desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <p>{data[actualId].name}</p>
            <p>{data[actualId].email}</p>
            <p>{data[actualId].phone}</p>
            <p>{data[actualId].website}</p>
            <p>{data[actualId].company.name}</p>
        </div>
        }
      </ul>
    </div>
    </div>
  )
}
