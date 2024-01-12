import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {hot} from "react-hot-loader/root"
import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import SplashPage from './layout/SplashPage'
import TopBar from "./layout/TopBar"
import TripList from './layout/TripList'
import NewTripForm from './layout/NewTripForm'
import TripDetail from './layout/TripDetail'
import ActivityTile from './layout/ActivityTile'
import NewActivityForm from './layout/NewActivityForm'
import NewItemForm from './layout/NewItemForm'
import AuthenticatedRoute from "./authentication/AuthenticatedRoute"


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch (err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/trips" component={TripList} />
        <Route exact path="/trips/new" component={NewTripForm} />
        <Route exact path="/trips/:id" component={TripDetail} />
        <Route exact path="/trips/new" component={NewTripForm} />
        <Route exact path="/trips/:id/activities-new" component={NewActivityForm} />
        <Route exact path="/trips/:id/activities/:id/items-new" component={NewItemForm} />

      </Switch>
    </Router>
  )
}

export default hot(App)
