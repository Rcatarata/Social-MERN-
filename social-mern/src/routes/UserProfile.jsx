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
