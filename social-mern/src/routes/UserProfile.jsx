import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    let params =  useParams();

  return (
    <div>
       <p>This is the outlet for {params.userId}</p>
    </div>
  )
}
