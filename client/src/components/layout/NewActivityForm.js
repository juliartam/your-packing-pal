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
      //added /actiities to
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
    <div className="grid-x grid-padding-x align-center">
      <div className="cell medium-4">
        <h1 className="form-title">Activity</h1>
        <ErrorList errors={errors} />
        <form onSubmit={handleSubmit} className="grid-x grid-padding-x align-center">
          <input
            className="form-input-single"
            name="name"
            value={newActivity.name}
            type="text"
            onChange={handleInputChange}
            placeholder="What is the activity you want to pack for?"
          />
          <input
            className="form-input-multi"
            name="notes"
            value={newActivity.notes}
            type="text"
            onChange={handleInputChange}
            placeholder="Any notes? Add them here..."
          />
          <input className="form-submit-button" type="Submit" />
        </form>
      </div>
    </div>
  )
}

export default NewActivityForm



// return (
//   <>
//     <div className="grid-container">
//       <h1 className="form-title">New Activity Form</h1>

//       <ErrorList errors={errors} />

//       <form onSubmit={handleSubmit} className="form-input-single grid-container grid-x grid-margin-x cell medium-6">
//         <input
//           className="form-input-single grid-container grid-x grid-margin-x cell medium-8"
//           name="name"
//           value={newActivity.name}
//           type="text"
//           onChange={handleInputChange}
//           placeholder="What is the activity you want to pack for?"
//         />
//         <input
//           className="form-input-single grid-container grid-x grid-margin-x cell medium-8"
//           name="notes"
//           value={newActivity.notes}
//           type="text"
//           onChange={handleInputChange}
//           placeholder="Any notes? Add them here..."
//         />
//         <input className="form-submit-button grid-container grid-x grid-margin-x cell medium-8" type="Submit" />
//       </form>
//     </div>
//   </>
// )
// }