import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

//jt: add it here
const clientRoutes = [
  "/",

  "/user-sessions/new",
  "/users/new",

  // "/users",
  "/trips",
  "/trips/new",
  "/trips/:id",
  "/trips/:id/activities-new",
  "trips/:id/activities/:id/items-new",
]
const authedClientRoutes = ["/profile"]

router.get(authedClientRoutes, (req, res) => {
  if (req.user) {
    res.sendFile(getClientIndexPath())
  } else {
    res.redirect("/user-sessions/new")
  }
})

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
