import axios from "axios";

const http = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  withCredentials: false
})

http.interceptors.response.use(
  response => response.data,
  error =>  Promise.reject(error)
)

export default http

































// import axios from 'axios'

// const http = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   withCredentials: true
// })

// http.interceptors.response.use(
//   response => response.data,
//   error => {
//     return Promise.reject(error)
//   }
// )
