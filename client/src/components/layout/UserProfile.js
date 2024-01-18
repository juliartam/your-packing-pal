import React, {useState, useEffect} from "react"

const UserProfile = ({user, setCurrentUser}) => {
  return (
    <div className="grid-container">
      <h2>Account Details</h2>
      <h5>Username: {user.userName}</h5>
      <h5>Email: {user.email}</h5>
      <img width="100px" src={user.image} />
    </div>
  )
}

export default UserProfile