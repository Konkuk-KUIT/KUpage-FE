import { ENDPOINTS } from '../config';
import { ApiResponse } from '../types/commonApiResponseTypes';
import { TeamsResponse } from '../types/teamMatchingApiTypes';
import useApi from './useApi';

const useTeamMatching = () => {
  const { api } = useApi();

  const getTeamDatas = async () => {
    try {
      const res = await api.get<ApiResponse<TeamsResponse>>(ENDPOINTS.TEAMS);
      return res.data;
    } catch {
      throw new Error('팀 데이터 불러오기 실패');
    }
  };

  return getTeamDatas;
};

export default useTeamMatching;
