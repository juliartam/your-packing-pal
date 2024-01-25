
import React, {useState} from "react"
import FormError from "../layout/FormError"
import config from "../../config"
import _ from "lodash"

const RegistrationForm = () => {
  const [userPayload, setUserPayload] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const [errors, setErrors] = useState({})

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const validateInput = (payload) => {
    setErrors({})
    const {email, password, passwordConfirmation} = payload
    const emailRegexp = config.validation.email.regexp
    let newErrors = {}
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      }
    }

    if (password.trim() === "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      }
    }

    if (passwordConfirmation.trim() === "") {
      newErrors = {
        ...newErrors,
        passwordConfirmation: "is required",
      }
    } else {
      if (passwordConfirmation !== password) {
        newErrors = {
          ...newErrors,
          passwordConfirmation: "does not match password",
        }
      }
    }

    setErrors(newErrors)
    return _.isEmpty()
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (validateInput(userPayload)) {
      try {
        if (Object.keys(errors).length === 0) {
          const response = await fetch("/api/v1/users", {
            method: "post",
            body: JSON.stringify(userPayload),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          })
          if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
          }
          const userData = await response.json()
          setShouldRedirect(true)
        }
      } catch (err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
  }

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  if (shouldRedirect) {
    location.href = "/trips"
  }

  return (
    <div className="grid-container">
      <h1 className="form-title">Register</h1>
      <form onSubmit={onSubmit} className="form-label form-input-single">
        <div>
          <label>
            Email
            <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
            <FormError error={errors.email} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={userPayload.password}
              onChange={onInputChange}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div>
          <label>
            Password Confirmation
            <input
              type="password"
              name="passwordConfirmation"
              value={userPayload.passwordConfirmation}
              onChange={onInputChange}
            />
            <FormError error={errors.passwordConfirmation} />
          </label>
        </div>
        <div>
          <input className="form-submit-button" type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm

// import React, {useState} from "react"
// import FormError from "../layout/FormError"
// import ErrorList from "../layout/ErrorList"
// import translateServerErrors from "../../services/translateServerErrors"
// import config from "../../config"
// import _ from "lodash"


// const RegistrationForm = () => {
//   const [userPayload, setUserPayload] = useState({
//     email: "",
//     password: "",
//     passwordConfirmation: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [serverErrors, setServerErrors] = useState({})

//   const [shouldRedirect, setShouldRedirect] = useState(false)

//   const validateInput = (payload) => {
//     setErrors({})
//     const {email, password, passwordConfirmation} = payload
//     const emailRegexp = config.validation.email.regexp.emailRegex
//     let newErrors = {}

//     if (!email.match(emailRegexp)) {
//       newErrors = {
//         ...newErrors,
//         email: "is invalid",
//       }
//     }

//     if (password.trim() == "") {
//       newErrors = {
//         ...newErrors,
//         password: "is required",
//       }
//     }

//     if (passwordConfirmation.trim() === "") {
//       newErrors = {
//         ...newErrors,
//         passwordConfirmation: "is required",
//       }
//     } else {
//       if (passwordConfirmation !== password) {
//         newErrors = {
//           ...newErrors,
//           passwordConfirmation: "does not match password",
//         }
//       }
//     }

//     setErrors(newErrors)
//     if (Object.keys(newErrors).length === 0) {
//       return true
//     }
//     return false
//   }

//   const onSubmit = async (event) => {
//     event.preventDefault()
//     if (validateInput(userPayload)) {
//       try {
//         if (Object.keys(errors).length === 0) {
//           const response = await fetch("/api/v1/users", {
//             method: "post",
//             body: JSON.stringify(userPayload),
//             headers: new Headers({
//               "Content-Type": "application/json",
//             }),
//           })
//           if (!response.ok) {
//             if (response.status === 422) {
//             }
//             const errorMessage = `${response.status} (${response.statusText})`
//             const error = new Error(errorMessage)
//             throw error
//           }
//           const userData = await response.json()
//           console.log(userData)
//           setShouldRedirect(true)
//         }
//       } catch (err) {
//         console.error(`Error in fetch: ${err.message}`)
//       }
//     }
//   }

//   const onInputChange = (event) => {
//     setUserPayload({
//       ...userPayload,
//       [event.currentTarget.name]: event.currentTarget.value,
//     })
//   }

//   if (shouldRedirect) {
//     location.href = "/"
//   }

//   return (
//     <div className="grid-container">
//       <h1>Register</h1>
//       <form onSubmit={onSubmit}>

//         <div>
//           <label>
//             Email
//             <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
//             <FormError error={errors.email} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={userPayload.password}
//               onChange={onInputChange}
//             />
//             <FormError error={errors.password} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password Confirmation
//             <input
//               type="password"
//               name="passwordConfirmation"
//               value={userPayload.passwordConfirmation}
//               onChange={onInputChange}
//             />
//             <FormError error={errors.passwordConfirmation} />
//           </label>
//           <button onClick={onSubmit} type="submit" className="form-submit-button">
//             Register

//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default RegistrationForm


//jt:original component return without any changes
// return (
//   <div className="grid-container">
//     <h1>Register</h1>
//     <ErrorList errors={serverErrors} />
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>
//           Email
//           <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
//           <FormError error={errors.email} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={userPayload.password}
//             onChange={onInputChange}
//           />
//           <FormError error={errors.password} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password Confirmation
//           <input
//             type="password"
//             name="passwordConfirmation"
//             value={userPayload.passwordConfirmation}
//             onChange={onInputChange}
//           />
//           <FormError error={errors.passwordConfirmation} />
//         </label>
//       </div>
//       <div>
//         <input type="submit" className="button" value="Register" />
//       </div>
//     </form>
//   </div>
// );
// };



