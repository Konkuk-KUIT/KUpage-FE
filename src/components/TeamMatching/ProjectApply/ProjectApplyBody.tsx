import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import { useAvailableParts } from '../../../hooks/useAvailableParts';
import { TeamInfo } from '../../../types/teamMatchingApiTypes';
import { getAppTypeDisplay } from '../../../utils/appType';
import TextBadge from '../../commons/TextBadge';
import ToggleButton from '../IdeaRegister/ToggleButton';

import ProjectApplyFileInput from './ProjectApplyFileInput';
import ProjectApplyTextInput from './ProjectApplyTextInput';

interface Props {
  teamData: TeamInfo;
}

const ProjectApplyBody = ({ teamData }: Props) => {
  const availableParts = useAvailableParts(teamData);

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
            {availableParts.length > 0 ? (
              availableParts.map((partType) => (
                <ToggleButton
                  key={partType.id}
                  name={partType.name}
                  value={partType.value}
                  field={'appliedPart'}
                />
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <p className="text-24 font-500">지원 가능한 파트가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
        <ProjectApplyFileInput />
        <ProjectApplyTextInput />
      </div>
    </div>
  );
};

export default ProjectApplyBody;
