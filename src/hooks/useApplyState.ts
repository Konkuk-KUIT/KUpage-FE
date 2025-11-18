import useApi from './useApi';
import { ApiResponse } from '../types/commonApiResponse';
import { ApplicantStateResponse, ApplyStateResponse } from '../types/applyState';

const useApplyState = () => {
  const { api } = useApi();

  const getApplyStateData = () => {
    api
      .get<ApiResponse<ApplyStateResponse | ApplyStateResponse[]>>('/teams/applicants')
      .then((res) => {
        const data = res.data;
        if (data.success) return data;
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  const getApplicantStateData = () => {
    api
      .get<ApiResponse<ApplicantStateResponse>>('/teams/applicants')
      .then((res) => {
        const data = res.data;
        if (data.success) return data;
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  return { getApplyStateData, getApplicantStateData };
};

export default useApplyState;
