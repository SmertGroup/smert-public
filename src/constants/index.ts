import axios from 'axios'

export const SMERT_COLOR = '#004879'

export const api = axios.create({
  baseURL: 'https://test-backend.lobbycontrol.cl:4001/api'
})
