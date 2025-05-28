// src/services/userService.ts
import api from '../api/api';

export const getUsers = () => {
  return api.get('/users');
};

export const createUser = (userData: any) => {
  return api.post('/users', userData);
};
