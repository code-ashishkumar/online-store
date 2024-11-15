// src/api/axiosMiddleware.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const { API_URL } = import.meta.env;

const api: AxiosInstance = axios.create({
  baseURL: API_URL, // Replace with your actual API base URL
  timeout: 10000, // Optional timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authentication token
api.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage or a global state manager
    const token = localStorage.getItem('authToken');
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

// Response interceptor for handling errors globally
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response; // Pass through successful response
  },
  (error) => {
    if (error.response) {
      // Handle specific error statuses
      if (error.response.status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      if (error.response.status === 403) {
        console.warn('Forbidden: Access is denied.');
      }
    }
    return Promise.reject(error);
  },
);

export default api;
