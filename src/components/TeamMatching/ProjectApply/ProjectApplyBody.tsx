import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import { Part, PART_TYPE, partMapper } from '../../../constants/ProjectApply/partType.constants';
import useUserStore from '../../../hooks/useUserStore';
import { TeamInfo } from '../../../types/teamMatchingApiTypes';
import { getAppTypeDisplay } from '../../../utils/appType';
import { partExtractor } from '../../../utils/authorization';
import TextBadge from '../../commons/TextBadge';
import ToggleButton from '../IdeaRegister/ToggleButton';

import ProjectApplyFileInput from './ProjectApplyFileInput';
import ProjectApplyTextInput from './ProjectApplyTextInput';

interface Props {
  teamData: TeamInfo;
}

const getDefaultPart = (userPart: Set<Part>) => {
  if (userPart.has('Web_App')) return 'Web';
  if (userPart.has('Native_App')) return 'Android';
  if (userPart.has('Server')) return 'Server';
  return undefined;
};

const ProjectApplyBody = ({ teamData }: Props) => {
  const { auths } = useUserStore();
  const { setValue } = useFormContext();
  const userPart = partExtractor(auths);
  const appPart = teamData.appType;
  const isWebProject = appPart === 'Web_App';
  const availableParts = PART_TYPE.filter((partType) => {
    // 프로젝트에 맞는 파트만 표시
    if (isWebProject && partType.value === 'Android') return false;
    if (!isWebProject && partType.value === 'Web') return false;
    return true;
  }).filter((partType) => {
    // 유저 역할에 해당되는 파트만 표시
    return userPart.has(partMapper[partType.value]);
  });

  useEffect(() => {
    const defaultPart = getDefaultPart();
    if (defaultPart) {
      // availableParts에 해당 파트가 있는지 확인
      const isPartAvailable = availableParts.some((part) => part.value === defaultPart);
      if (isPartAvailable) {
        setValue('appliedPart', defaultPart, { shouldValidate: true });
      }
    }
  }, [availableParts]);

  return (
    <div>
      <div className="w-full h-auto flex flex-col items-start gap-24 px-56 py-36 bg-gray">
        <h2 className="text-32 font-600">{teamData.serviceName}</h2>
        <h3 className="text-24 font-700">{teamData.ownerName}</h3>
        <TextBadge text={getAppTypeDisplay(teamData.appType)} />
        <div className="w-full border-2 border-border rounded-10 px-24 py-28 text-start text-24 font-500 leading-[35px]">
          {teamData.topicSummary}
        </div>
      </div>
      <div className="w-full flex flex-col gap-132 p-48">
        <div className="w-full flex flex-col gap-16">
          <div className={styles.text}>
            파트를 선택해주세요 <span className="text-[#d5da40]">*</span>
          </div>
          <div className="w-full flex flex-row gap-16">
            {availableParts.map((partType) => (
              <ToggleButton
                key={partType.id}
                name={partType.name}
                value={partType.value}
                field={'appliedPart'}
              />
            ))}
          </div>
        </div>
        <ProjectApplyFileInput />
        <ProjectApplyTextInput />
      </div>
    </div>
  );
};

export default ProjectApplyBody;
