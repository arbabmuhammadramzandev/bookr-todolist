import axios from 'axios';

export const customAxios = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
  });
  
  customAxios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        window.location.href = '/';
      }
    });
  
  export default customAxios;