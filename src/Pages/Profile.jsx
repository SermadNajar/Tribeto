import React from 'react'
import {useParams} from "react-router-dom";


function Profile() {
    let {username} = useParams();

  return (

      <div className='Profile'>
        <h1>THIs is the profile of {username} </h1>
      </div>
  
  )
}

export default Profile;