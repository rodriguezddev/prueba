import axios from "axios";
import AuthService from "./auth";
import Config from "./config"
const Lockr = require("lockr");

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {


    config.headers = {
      "x-api-key": Config.X_API_KEY,
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    };
    return config;
  },
  error => {
    Promise.reject(error);
  });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response;
}, async function(error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    if (error.response.data && error.response.data.token) {
      Lockr.set("jwt-token", error.response.data.token);
    }
    return axiosApiInstance(originalRequest);
  }
  if (error.response.status === 401 && !originalRequest._retry) {
    await AuthService.logout();
    return window.location = '/login';
  }

  return Promise.reject(error);
});


export default axiosApiInstance;
