import express from "express"
import userSessionsRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import clientRouter from "./clientRouter.js"
import tripsRouter from './api/v1/tripsRouter.js'

const rootRouter = new express.Router()
rootRouter.use("/", clientRouter)
rootRouter.use("/api/v1/user-sessions", userSessionsRouter)
rootRouter.use("/api/v1/users", usersRouter)
//place your server-side routes here
rootRouter.use("/api/v1/trips", tripsRouter)
// rootRouter.us( "/api/vi/historyEndpoints", historyRouter)
//jt: firsst make new rootRouter

// rootRouter.use("/", clientRouter) //jt 1/24 change


export default rootRouter
