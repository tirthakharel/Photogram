import { api } from './api.js'
import axios from 'axios'

async function register(firstName, lastName, email, password, username, file) {
  axios.post(`${api}/register`, {
    firstName,
    lastName,
    email,
    password,
    username,
    file,
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}

async function login(firstName, lastName, email, password, username, file) {
  axios.post(`${api}/login`, {
  })
  .catch((err) => {
    // TODO: Handle the error.
  })
  .then((res) => {
    // TODO: Handle the response.
  });
}