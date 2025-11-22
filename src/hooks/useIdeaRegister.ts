import { ENDPOINTS } from '../config';
import { IdeaRegisterInfo } from '../constants/IdeaRegister/IdeaRegitster';
import { FileUploadResponse } from '../types/ideasApiTypes';
import useApi from './useApi';

const useIdeaRegister = () => {
  const { api } = useApi();

  const uploadFile = async (presignedUrl: string, imageFile: File) => {
    try {
      await api.put(presignedUrl, imageFile);
      return true;
    } catch {
      throw new Error('파일 업로드 실패');
    }
  };

  const testUploadFile = async (file: File, mime: string) => {
    try {
      const res = await api.post<FileUploadResponse>(ENDPOINTS.IMG_UPLOAD, {
        'Content-Type': mime,
        'Content-Length': 1500,
        'Content-Name': 'testImage',
      });

      const data = res.data;
      if (data.isSuccess) {
        const isUploadSuccess = await uploadFile(data.result.presignedUrl, file);
        if (isUploadSuccess) {
          return data.result.fileUrl;
        }
      } else {
        throw new Error(data.responseMessage || 'Presigned URL 요청에 실패했습니다.');
      }
    } catch (err) {
      throw err;
    }
  };

  const ideaRegister = async (userInput: IdeaRegisterInfo) => {
    try {
      const imgUploadUrl = await testUploadFile(userInput.imageUrl as File, 'image/png');
      const pdfUploadUrl = await testUploadFile(
        userInput.serviceIntroFile as File,
        'application/pdf'
      );

      const toServerData = {
        ...userInput,
        imageUrl: imgUploadUrl as string,
        serviceIntroFile: pdfUploadUrl as string,
      };

      const res = await api.post(ENDPOINTS.IDEAS, toServerData);
      if (res.data.success) {
        console.log('아이디어 등록 성공');
      }
    } catch (err) {
      console.error('아이디어 등록 실패:', err);
    }
  };

  return ideaRegister;
};

export default useIdeaRegister;
