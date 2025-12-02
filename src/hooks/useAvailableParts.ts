import { PART_TYPE, partMapper } from '../constants/ProjectApply/partType.constants';
import { TeamInfo } from '../types/teamMatchingApiTypes';
import { partExtractor } from '../utils/authorization';

import useUserStore from './useUserStore';

export const useAvailableParts = (teamData?: TeamInfo) => {
  const { auths } = useUserStore();
  const userPart = partExtractor(auths);
  if (!teamData) return [];
  const isWebProject = teamData?.appType === 'Web_App';
  const availableParts = PART_TYPE.filter((partType) => {
    if (isWebProject && partType.value === 'Android') return false;
    if (!isWebProject && partType.value === 'Web') return false;
    return userPart.has(partMapper[partType.value]);
  });
  return availableParts;
};
