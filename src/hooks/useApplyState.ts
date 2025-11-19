import useApi from './useApi';
import { ApiResponse } from '../types/commonApiResponse';
import { ApplicantStateResponse, ApplyStateResponse } from '../types/applyState';

const useApplyState = () => {
  const { api } = useApi();

  const getApplyStateData = (): Promise<ApplyStateResponse | ApplyStateResponse[] | undefined> => {
    return api
      .get<ApiResponse<ApplyStateResponse | ApplyStateResponse[]>>('/teams/applications')
      .then((res) => {
        const data = res.data;
        if (data.success) return data.result;
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
