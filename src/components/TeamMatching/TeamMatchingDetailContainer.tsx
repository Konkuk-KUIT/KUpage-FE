import RoundedSquareButton from '../commons/RoundedSquareButton';
import RightUpArrow from '../../assets/imgs/RightUpArrow.svg';
import { TeamInfo } from '../../types/teamMatchingApiTypes';
import TextBadge from '../commons/TextBadge';
import { useNavigate } from 'react-router-dom';

interface Props {
  projectData: TeamInfo;
}

const TeamMatchingDetailContainer = ({ projectData }: Props) => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-full flex flex-col justify-start gap-28">
      <RoundedSquareButton
        className={'w-[257px] h-[71px] !px-24'}
        onClick={() => navigate('/team-matching/apply')}
      >
        이 프로젝트 지원하기
      </RoundedSquareButton>

      <section className="w-full flex flex-col items-start gap-12">
        <div className="font-600 text-[32px]">{projectData.serviceName}</div>
        <div className="font-700 text-[24px]">{projectData.ownerName}</div>
        <TextBadge text={projectData.appType} />
        <div className="w-full whitespace-pre-line border-[2px] border-[gray] min-h-[20rem] rounded-[10px] px-20 py-24">
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
        <div className="w-full whitespace-pre-line border-2 border-[gray] min-h-[20rem] rounded-10 px-20 py-24">
          {projectData.featureRequirements}
        </div>
      </section>

      <section className="w-full flex flex-col items-start gap-12">
        <div className="font-600 text-[32px]">이런 팀원을 찾고 있어요!</div>
        <div className="w-full whitespace-pre-line border-2 border-[gray] min-h-[20rem] rounded-10 px-20 py-24">
          {projectData.preferredDeveloper}
        </div>
      </section>
    </main>
  );
};

export default TeamMatchingDetailContainer;
