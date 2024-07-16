// client/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (userData) => api.post('/auth/signup', userData);
export const signin = (credentials) => api.post('/auth/signin', credentials);
export const createBooking = (bookingData) => api.post('/booking', bookingData);
export const cancelBooking = (bookingId) => api.put(`/booking/${bookingId}/cancel`);
export const getUserBookings = () => api.get('/booking/user');