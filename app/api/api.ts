import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8080/api/v1',
  baseURL:'https://property-management-api-706081124104.africa-south1.run.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
