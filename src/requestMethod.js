import axios from "axios"

export const BASE_URL = "https://myreactonlinestore.onrender.com/api"
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzg2ZTU2YjFkMDJkNGM3NmM2Y2U0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE4OTQ2NCwiZXhwIjoxNjY5NDQ4NjY0fQ.7kURfcSN6RByMZdPeIokIwBv3c50-lUkQKHb60BXBB8"
const user = JSON.parse(localStorage.getItem("persist:root"))?.user
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})
