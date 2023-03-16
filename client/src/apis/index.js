import axios from 'axios';
import queryString from 'query-string';

export const baseURL = 'http://localhost:5000/api/v1';
const apiConfig = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

apiConfig.interceptors.response.use((res) => {
  if (res && res.data) return res.data;
});

apiConfig.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('store:token'));
  config.headers = {
    Authorization: 'Bearer ' + token,
  };
  return config;
});

export default apiConfig;
