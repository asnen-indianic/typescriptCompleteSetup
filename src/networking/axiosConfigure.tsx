import axios from 'axios';
const axiosConfigure = () => {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  axios.defaults.timeout = 90000;
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error?.response?.status === 422) return error?.response;
      return Promise.reject(error);
    },
  );
};
export default axiosConfigure;
