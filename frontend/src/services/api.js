import axios from 'axios';

//const DEV_ENV = import.meta.env.VITE_APP_DEV_ENV; 
const DEV_ENV = "development";
let API_URL = 'http://localhost:5000/api';

if (DEV_ENV === "development") {
  API_URL = 'http://localhost:5000/api';
} else {
  if (DEV_ENV === "production") {
    API_URL = '';
  }
}

const api = axios.create({
  baseURL: API_URL, 
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (!(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export const auth = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export const products = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  create: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  },
  delete: async (productId) => {
    await api.delete(`/products/${productId}`);
  }  
};

export const resources = {
  getAll: async () => {
    const response = await api.get('/resources');
    return response.data;
  },
};

export default api;
