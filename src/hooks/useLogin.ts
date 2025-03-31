import useApi from './useApi';

const useLogin = () => {
  const { api } = useApi();

  const login = () => {
    api.post('/members', {});
  };

  const authLogin = () => {
    api.post('auth', {});
  };

  return { login, authLogin };
};

export default useLogin;
