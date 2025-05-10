import { ENDPOINTS } from '../config';

import useApi from './useApi';

const useLogin = () => {
  const { api } = useApi();

  const login = () => {
    api.post(ENDPOINTS.MEMBERS, {});
  };

  const authLogin = () => {
    api.post(ENDPOINTS.AUTH, {});
  };

  return { login, authLogin };
};

export default useLogin;
