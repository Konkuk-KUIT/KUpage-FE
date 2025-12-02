import RoundedSquareButton from '../commons/RoundedSquareButton';
import RightUpArrow from '../../assets/imgs/RightUpArrow.svg';
import TextBadge from '../commons/TextBadge';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { TeamMatchingContext } from './TeamMatchingContext';
import { Loader2 } from 'lucide-react';
import useUserStore from '../../hooks/useUserStore';
import { partExtractor, teamMatchingAuthExtractor } from '../../utils/authorization';
import { getAppTypeDisplay } from '../../utils/appType';

const TeamMatchingDetailContainer = () => {
  const auths = useUserStore((state) => state.auths);
  const userType = teamMatchingAuthExtractor(auths);
  const userPart = partExtractor(auths);

  const navigate = useNavigate();
  const { query, selectedTeamData: projectData, canApply } = useContext(TeamMatchingContext)!;

  const applyBtnClickHandler = () => {
    if (projectData) {
      navigate('/team-matching/apply', {
        state: {
          teamData: projectData,
        },
      });
    }
  };

  if (query.isLoading) {
    return (
      <div className="w-full min-h-screen flex-center">
        <Loader2 className="w-20 h-20 animate-spin text-main" />
      </div>
    );
  }

  if (!projectData) {
    return <div className="w-full min-h-screen flex-center"></div>;
  }

  const isMatchingPart = userPart.has(projectData.appType);
  const isServerPart = userPart.has('Server');

  return (
    <div className="w-full h-full flex flex-col justify-start gap-28">
      {((userType === 'general' && (isMatchingPart || isServerPart)) || userType === 'admin') &&
        canApply && (
          <RoundedSquareButton
            className={'w-[257px] h-[71px] !px-24'}
            onClick={applyBtnClickHandler}
          >
            이 프로젝트 지원하기
          </RoundedSquareButton>
        )}

      <section className="w-full flex flex-col items-start gap-12">
        <div className="font-600 text-[32px]">{projectData.serviceName}</div>
        <div className="font-700 text-[24px]">{projectData.ownerName}</div>
        <TextBadge text={getAppTypeDisplay(projectData.appType)} />
        <div className="w-full h-auto min-h-[20rem] whitespace-pre-wrap break-words border-[2px] border-[gray] rounded-[10px] px-20 py-24 text-start text-24 font-500 leading-[35px]">
          {projectData.topicSummary}
        </div>
        <img
          className="w-full h-[414px] rounded-[10px]"
          src={projectData.imageUrl}
          alt="프로젝트 이미지"
        />
      </section>

      <section className="w-full flex flex-col items-start gap-12">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="font-600 text-[32px]">서비스 소개서</div>
          <div
            className="flex flex-row items-center gap-[10px] font-700 text-[24px] cursor-pointer"
            onClick={() => window.open(projectData.serviceIntroFile)}
          >
            <img src={RightUpArrow} className="w-16" />
            원본 보기
          </div>
        </div>
        <iframe
          className="w-full h-[457px] rounded-[10px]"
          src={projectData.serviceIntroFile}
        ></iframe>
      </section>

      <section className="w-full flex flex-col items-start gap-12">
        <div className="font-600 text-[32px]">우리 서비스의 기능 요구사항이에요!</div>
        <div className="w-full h-auto min-h-[20rem] whitespace-pre-wrap break-words border-2 border-[gray] rounded-10 px-20 py-24 text-start text-24 font-500 leading-[35px]">
          {projectData.featureRequirements}
        </div>
      </section>

      <section className="w-full flex flex-col items-start gap-12">
        <div className="font-600 text-[32px]">이런 팀원을 찾고 있어요!</div>
        <div className="w-full h-auto min-h-[20rem] whitespace-pre-wrap break-words border-2 border-[gray] rounded-10 px-20 py-24 text-start text-24 font-500 leading-[35px]">
          {projectData.preferredDeveloper}
        </div>
      </section>
    </div>
  );
};

export default TeamMatchingDetailContainer;
