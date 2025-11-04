import { ENDPOINTS } from '../config';
import { IdeaRegisterInfo } from '../constants/IdeaRegister/IdeaRegitster';
import useApi from './useApi';

const useIdeaRegister = () => {
  const { api } = useApi();

  const ideaRegister = (userInput: IdeaRegisterInfo) => {
    const formData = new FormData();
    api
      .post(ENDPOINTS.IDEAS, userInput)
      .then((res) => alert('제출 완료했습니다'))
      .catch((err) => console.error(err));
  };

  return ideaRegister;
};

export default useIdeaRegister;
