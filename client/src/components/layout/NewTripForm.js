import React, {useState} from "react"
import {Redirect} from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors"
import ErrorList from "./ErrorList"

const NewTripForm = (props) => {
  // const {id} = useParams()

  const [newTrip, setNewTrip] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: "",
  })

  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewTrip = async () => {
    try {
      const response = await fetch("/api/v1/trips", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(newTrip),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      }
      const body = await response.json()
      setShouldRedirect(true)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }



  const handleInputChange = (event) => {
    setNewTrip({
      ...newTrip,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewTrip()
  }


  if (shouldRedirect) {
    return <Redirect push to={"/trips"} />
  }

  return (
    <div className="grid-container grid-x grid-margin-x">
      <div className="form-title">New Trip Form</div>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="grid-container">
        <label className="form-label">Name
          <input
            className="form-input-single"
            name="name"
            value={newTrip.name}
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">Location
          <input
            className="form-input-single"
            name="location"
            value={newTrip.location}
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">Start Date
          <input
            className="form-input-single"
            name="startDate"
            value={newTrip.startDate}
            type="date"
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">End Date
          <input
            className="form-input-single"
            name="endDate"
            value={newTrip.endDate}
            type="date"
            onChange={handleInputChange}
          />
        </label>
        <input className="form-submit-button" type="Submit" name="Submit" />
      </form>
    </div >
  )
}

export default NewTripForm