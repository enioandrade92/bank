import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 4000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@Bank:Token') || '';
  const configuration = config
  
  configuration.headers = {
    'Authorization': token,
  }

  return configuration;

})

export default api;
