import React from 'react'
import { Link } from 'react-router-dom'


const SplashPage = ( props ) => {
  return (
    <div>
      <p className="splash-page-title">Packt</p>
      <Link to="/trips">See My Trips</Link>
    </div>

  )
}

export default SplashPage