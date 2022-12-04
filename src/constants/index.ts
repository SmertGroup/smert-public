import axios from 'axios'
// import {}

export const SMERT_COLOR = '#004879'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})
