import React, {useState} from "react"
import {useParams, Redirect} from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors"
import ErrorList from "./ErrorList"


const NewActivityForm = (props) => {
  const {id} = useParams()

  const [newActivity, setNewActivity] = useState({name: ""})
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewActivity = async () => {
    try {
      //this endpoint aligns with tripActivitiesRouter see tripsRouter.js line 72
      const response = await fetch(`/api/v1/trips/${id}/activities`, {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(newActivity),
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

  const handleSubmit = (event) => {
    // event.preventDefault()
    addNewActivity()
  }

  if (shouldRedirect) {
    return <Redirect push to={`/trips/${id}`} />
  }

  const handleInputChange = (event) => {
    setNewActivity({
      ...newActivity,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }


  return (
    <div className="grid-x grid-padding-x align-center">
      <div className="cell medium-4">
        {/* <h1 className="form-title"></h1> */}
        <ErrorList errors={errors} />
        <form onSubmit={handleSubmit} className="grid-x grid-padding-x align-center">
          <input
            className="form-input-single"
            name="name"
            value={newActivity.name}
            type="text"
            onChange={handleInputChange}
            placeholder="Add Item"
          />
          <input className="form-submit-button" type="Submit" />

        </form>
      </div>
    </div>
  )
}

export default NewActivityForm

