import React from 'react'
import {Link} from 'react-router-dom'
import SignOutButton from "../authentication/SignOutButton"
import TopBar from './TopBar'




const SplashPage = (props) => {


  const signInItem = [
    <div key="sign-in">
      <Link to="/user-sessions/new" className="splash-page-sign-in"> SIGN IN</Link>
    </div>
  ]

  const signUpItem = [
    <div key="sign-up">
      <Link to="/users/new"
        className="splash-page-sign-up">SIGN UP </Link>
    </div>
  ]

  // const authenticatedListItems = [
  //   <li key="sign-out">
  //     <SignOutButton />
  //   </li>,
  // ]



  return (

    <div className="align-center splash-page-background">
      <div className="splash-page-title grid-x align-center">Packt</div>
      <h4 className="splash-page-caption grid-x align-center">the faster and smarter way to get packed.</h4>
      <div className="grid-x align-center">{signUpItem} {signInItem}
      </div>
    </div>


  )
}

export default SplashPage