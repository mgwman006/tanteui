// src/services/userService.ts
import api from '../api/api';

export const getUsers = () => {
  return api.get('/users');
};

export const createUser = (userData: any) => {
  return api.post('/users', userData);
};

export const logInUser = (logInDetails: any) => {
  return api.post('/users/logIn', logInDetails);
};

export const registerLandLord = (landLordData: any) => {
  return api.post('/landlords', landLordData);
};
