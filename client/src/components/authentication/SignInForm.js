import React, {useState} from "react"
import config from "../../config"
import FormError from "../layout/FormError"

const SignInForm = () => {
  const [userPayload, setUserPayload] = useState({email: "", password: ""})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})

  const validateInput = (payload) => {
    setErrors({})
    const {email, password} = payload
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

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      return true
    } else {
      return false
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (validateInput(userPayload)) {
      try {
        const response = await fetch("/api/v1/user-sessions", {
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
      <div className="form-card">
        <h1 className="form-title">Sign In</h1>
        <form className="form-label form-input-single">
          <input
            className='form-input-single grid-container'
            type="text"
            // className="input-field"
            name="email"
            value={userPayload.email}
            onChange={onInputChange}
            placeholder="Email"
          />
          <FormError error={errors.email} />

          <input
            className='form-input-single'
            type="password"
            // className="input-field"
            name="password"
            value={userPayload.password}
            onChange={onInputChange}
            placeholder="Password"
          />
          <FormError error={errors.password} />

          <button onClick={onSubmit} type="submit" className="form-submit-button">
            Submit
          </button>
        </form>

      </div>
      {/* <div className="under-form-text">
        Don't have an account?{" "}
        <a className="under-form-link" href="../users/new">
          Sign up
        </a>
      </div> */}
    </div>
  )
}

export default SignInForm

// import React, {useState} from "react"
// import config from "../../config"
// import FormError from "../layout/FormError"

// const SignInForm = () => {
//   const [userPayload, setUserPayload] = useState({email: "", password: ""})
//   const [shouldRedirect, setShouldRedirect] = useState(false)
//   const [errors, setErrors] = useState({})

//   const validateInput = (payload) => {
//     setErrors({})
//     const {email, password} = payload
//     const emailRegexp = config.validation.email.regexp.emailRegex
//     let newErrors = {}
//     if (!email.match(emailRegexp)) {
//       newErrors = {
//         ...newErrors,
//         email: "is invalid",
//       }
//     }

//     if (password.trim() === "") {
//       newErrors = {
//         ...newErrors,
//         password: "is required",
//       }
//     }

//     setErrors(newErrors)

//     //jt: 1-12-23 3:41 PM commented out bc not in ne-destination app
//     // if (Object.keys(newErrors).length === 0) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//   }

//   const onSubmit = async (event) => {
//     event.preventDefault()
//     if (validateInput(userPayload)) {
//       try {
//         const response = await fetch("/api/v1/user-sessions", {
//           method: "post",
//           body: JSON.stringify(userPayload),
//           headers: new Headers({
//             "Content-Type": "application/json",
//           }),
//         })
//         if (!response.ok) {
//           const errorMessage = `${response.status} (${response.statusText})`
//           const error = new Error(errorMessage)
//           throw error
//         }
//         const userData = await response.json()
//         setShouldRedirect(true)
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
//     <div className="grid-container" onSubmit={onSubmit}>
//       <h1>Sign In</h1>
//       <form>
//         <div>
//           <label>
//             Email
//             <input
//               className="form-input-single"
//               type="text"
//               name="email"
//               value={userPayload.email}
//               onChange={onInputChange}
//             />
//             <FormError error={errors.email} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input
//               className="form-input-single"
//               type="password"
//               name="password"
//               value={userPayload.password}
//               onChange={onInputChange}
//             />
//             <FormError error={errors.password} />
//           </label>
//         </div>
//         <div>
//           <input type="submit" className="form-submit-button" value="Sign In" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SignInForm


//jt: commented out and replaced with code below directly copied from signinform component from photo-companion (sky)

