import axios from 'axios';

//const DEV_ENV = import.meta.env.VITE_APP_DEV_ENV; 
const DEV_ENV = "production";

let API_URL = 'http://localhost:5000/api';

if (DEV_ENV === "development") {
  API_URL = 'http://localhost:5000/api';
} else if (DEV_ENV === "production") {
  API_URL = 'https://khawateen-backend.onrender.com:5000/api';
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
