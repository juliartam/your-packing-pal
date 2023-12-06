import React, {useState} from "react"
import {useParams, Redirect} from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors"
import ErrorList from "./ErrorList"

const NewItemForm = (props) => {
  const {id} = useParams()

  const [newItem, setNewItem] = useState({name: ""})
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewItem = async () => {
    try {
      const response = await fetch(`/api/v1/trips/${id}/activities/${id}`, {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(newItem),
      })
      if (!response.ok) {
        if (response.status === 422) {
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
    addNewItem()
  }

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  if (shouldRedirect) {
    return <Redirect push to={`/trips/${id}/activities/${id}`} />
  }

  return (
    <div className="grid-x grid-padding-x align-center">
      <div className="cell medium-4">
        <h1 className="form-title">Item</h1>
        <ErrorList errors={errors} />
        <form onSubmit={handleSubmit} className="grid-x grid-padding-x align-center">
          <input
            className="form-input-single"
            name="name"
            value={newItem.name}
            type="text"
            onChange={handleInputChange}
            placeholder="What do you need to pack for this activity?"
          />
          <input className="form-submit-button" type="Submit" />
        </form>
      </div>
    </div>

  )
}

export default NewItemForm