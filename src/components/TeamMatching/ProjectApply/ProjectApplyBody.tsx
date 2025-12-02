import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import { PART_TYPE, partMapper } from '../../../constants/ProjectApply/partType.constants';
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

const ProjectApplyBody = ({ teamData }: Props) => {
  const { auths } = useUserStore();
  const userPart = partExtractor(auths);

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
            {PART_TYPE.map(
              (partType) =>
                userPart.has(partMapper[partType.value]) && (
                  <ToggleButton
                    key={partType.id}
                    name={partType.name}
                    value={partType.value}
                    field={'appliedPart'}
                  />
                )
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
