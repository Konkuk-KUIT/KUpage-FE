import axios from 'axios';

const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
  });

  return { api };
};

export default useApi;
