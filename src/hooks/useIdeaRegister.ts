import { ENDPOINTS } from '../config';
import { IdeaRegisterInfo } from '../constants/IdeaRegister/IdeaRegitster';
import { ApiResponse } from '../types/commonApiResponseTypes';
import { FileUploadResult } from '../types/ideasApiTypes';
import useApi from './useApi';

const useIdeaRegister = () => {
  const { api } = useApi();

  const uploadFile = async (presignedUrl: string, imageFile: File) => {
    try {
      await api.put(presignedUrl, imageFile, {
        skipAuth: true,
        headers: {
          'Content-Type': imageFile.type,
        },
      });
      return true;
    } catch {
      throw new Error('파일 업로드 실패');
    }
  };

  const testUploadFile = async (file: File) => {
    const mime = file.type;
    const uploadEndpoint =
      mime === 'application/pdf' ? ENDPOINTS.FILE_UPLOAD : ENDPOINTS.IMG_UPLOAD;
    try {
      const res = await api.post<ApiResponse<FileUploadResult>>(uploadEndpoint, {
        contentType: file.type,
        contentLength: file.size,
        contentName: file.name,
      });

      const data = res.data;
      if (data.success) {
        const isUploadSuccess = await uploadFile(data.result.presignedUrl, file);
        if (isUploadSuccess) {
          return data.result.fileUrl;
        }
      } else {
        throw new Error(data.message || 'Presigned URL 요청에 실패했습니다.');
      }
    } catch (err) {
      throw err;
    }
  };

  const ideaRegister = async (userInput: IdeaRegisterInfo) => {
    try {
      const imgUploadUrl = await testUploadFile(userInput.imageUrl as File);
      const pdfUploadUrl = await testUploadFile(userInput.serviceIntroFile as File);

      const toServerData = {
        ...userInput,
        imageUrl: imgUploadUrl as string,
        serviceIntroFile: pdfUploadUrl as string,
      };

      const res = await api.post(ENDPOINTS.IDEAS, toServerData);

      return res.data.success;
    } catch (err) {
      console.error('아이디어 등록 실패:', err);
    }
  };

  return ideaRegister;
};

export default useIdeaRegister;
