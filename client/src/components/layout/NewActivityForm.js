import React, {useState} from "react"
import {useParams, Redirect} from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors"
import ErrorList from "./ErrorList"

const NewActivityForm = (props) => {
  const {id} = useParams()

  const [newActivity, setNewActivity] = useState({
    name: "",
    notes: "",
  })

  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewActivity = async () => {
    try {
      const response = await fetch(`/api/v1/trips/${id}`, {
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
    event.preventDefault()
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

  // const ratings = ["1", "2", "3", "4", "5"]

  // const radioButtons = ratings.map( ( rating ) => (
  //   <>
  //     <input
  //       id={`rating${rating}`}
  //       type="radio"
  //       name="rating"
  //       value={rating}
  //       onChange={handleInputChange}
  //       checked={newReview.rating === rating}
  //     />
  //     <label htmlFor={`rating${rating}`}>{rating}</label>
  //   </>
  // ) )

  return (
    <>
      <div className="grid-container">
        <h1 className="form-title">New Activity Form</h1>

        <ErrorList errors={errors} />

        <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            className="form-input-single"
            name="name"
            value={newActivity.name}
            type="text"
            onChange={handleInputChange}
          />

          <label className="form-label">Notes</label>
          <input
            className="form-input-multi"
            name="notes"
            value={newActivity.notes}
            type="text"
            onChange={handleInputChange}
          />
          <input className="form-submit-button" type="Submit" />
        </form>
      </div>
    </>
  )
}

export default NewActivityForm
