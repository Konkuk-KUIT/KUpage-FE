import axios from 'axios';

import { BASE_URL } from '../config';

const useApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  return { api };
};

export default useApi;
