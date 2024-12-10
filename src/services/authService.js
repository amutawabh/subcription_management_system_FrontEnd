import axios from 'axios';

// إعداد Axios مباشرة في authService
const api = axios.create({
  baseURL: 'http://localhost:3000', // عنوان الـ Back-End
  headers: {
    'Content-Type': 'application/json',
  },
});

// دوال تسجيل الدخول والتسجيل
export const login = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post('/users/signup', userData);
  return response.data;
};
