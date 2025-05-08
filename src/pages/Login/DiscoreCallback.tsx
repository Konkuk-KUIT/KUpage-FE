import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useApi from '../../hooks/useApi';

const DiscordCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const { api } = useApi();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!code || hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const fetchToken = async () => {
      try {
        const response = await api.get(`/oauth2/code/discord?code=${code}`);
        const data = response.data;

        if (data.code === 1000) {
          localStorage.setItem('accessToken', data.result.accessToken);
          navigate('/');
        } else if (data.code === 2000) {
          localStorage.setItem('guestToken', data.result.guestToken);
          navigate('/signup');
        }
      } catch (err) {
        console.error('Discord 로그인 오류', err);
      }
    };

    fetchToken();
  }, [code, api, navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default DiscordCallback;
