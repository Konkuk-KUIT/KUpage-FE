import useApi from './useApi';

const useSignup = () => {
  const { api } = useApi();

  const signup = async (form: {
    name: string;
    studentId: string;
    college: string;
    major: string;
    grade: string;
    github: string;
    email: string;
    phone: string;
    birth: string;
  }) => {
    const guestToken = localStorage.getItem('guestToken');
    if (!guestToken) throw new Error('게스트 토큰이 없습니다.');

    const payload = {
      name: form.name,
      studentNumber: form.studentId,
      grade: form.grade,
      college: form.college,
      departName: form.major,
      githubId: form.github,
      email: form.email,
      phoneNumber: form.phone,
      birthday: form.birth,
    };

    const response = await api.post('/signup', payload, {
      headers: {
        Authorization: `Bearer ${guestToken}`,
      },
    });

    const { accessToken, refreshToken } = response.data.result;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return response.data;
  };

  return { signup };
};

export default useSignup;
