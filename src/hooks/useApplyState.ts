import useApi from './useApi';
import { ApiResponse } from '../types/commonApiResponseTypes';
import { ApplicantStateResponse, ApplyStateResponse } from '../types/applyStateTypes';

const useApplyState = () => {
  const { api } = useApi();

  const getApplyStateData = (): Promise<
    ApiResponse<ApplyStateResponse | ApplyStateResponse[]> | undefined
  > => {
    return api
      .get<ApiResponse<ApplyStateResponse | ApplyStateResponse[]>>('/teams/applications')
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  const getApplicantStateData = (teamId: number): Promise<ApplicantStateResponse | undefined> => {
    return api
      .get<ApiResponse<ApplicantStateResponse>>(`/teams/${teamId}/applicants`)
      .then((res) => {
        const data = res.data;
        if (data.success) return data.result;
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  return { getApplyStateData, getApplicantStateData };
};

export default useApplyState;
