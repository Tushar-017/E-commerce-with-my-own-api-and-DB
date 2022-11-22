import axios from "axios"

const BASE_URL = "http://localhost:8000/api"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzg2ZTU2YjFkMDJkNGM3NmM2Y2U0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTEwMTY3MCwiZXhwIjoxNjY5MzYwODcwfQ.pVVlGF11-Hvj2Bxulej2XP6bgOTijDDhEr4FWYHGRgw"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})
