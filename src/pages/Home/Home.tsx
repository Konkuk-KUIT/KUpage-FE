import { useNavigate } from 'react-router-dom';

import BigKUITLogo from '../../assets/imgs/BIGKUITLogo.svg';
import GreenButton from '../../components/commons/GreenButton';
import KuitAnimation from '../../components/commons/KuitAnimation';
import EventCardGrid from '../../components/home/EventCardGrid';
import InProgressBox from '../../components/home/InProgressBox';
import ProjectCard from '../../components/home/ProjectCard';
import SNSInquiryBtn from '../../components/home/SNSInquiryBtn';
import StaffContent from '../../components/home/StaffContent';

// TODO: 추후 서버 데이터 반영하면 지우기
const projectList = [
  {
    title: 'Chat Diary',
    description: '가장 쉬운 일기 습관',
    img: BigKUITLogo,
  },
  {
    title: '방울이',
    description: '내가 키우는 뽀모도로',
    img: BigKUITLogo,
  },
  {
    title: 'Beering',
    description: '나만의 맥주 취향 아카이빙 서비스',
    img: BigKUITLogo,
  },
  {
    title: 'Coupone',
    description: '쿠폰을 내 손 안에',
    img: BigKUITLogo,
  },
  {
    title: '집콕',
    description: "현명하게 내 자취방을 '콕' 하다",
    img: BigKUITLogo,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className="min-h-screen w-full flex-center flex-col gap-320"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <div className="relative w-580 h-504 mt-120">
          <img src={BigKUITLogo} alt="KUIT Logo" className="w-580 absolute-center" />
          <div className="flex-center flex-col absolute-center gap-20">
            <h1 className="text-80 font-700 whitespace-nowrap">
              <KuitAnimation />
            </h1>
            <p className="text-white text-32 font-500">건국대학교 기획/개발 동아리 KUIT</p>
            <GreenButton text="KUIT 6기 지원하러 가기 ->" isBig />
          </div>
        </div>

        <div>
          <div className="flex-center gap-84">
            <InProgressBox title="진행된 프로젝트" count={18} />
            <InProgressBox title="진행된 스터디" count={29} />
            <InProgressBox title="거쳐간 사람들" count={298} counters="명" />
          </div>

          <p className="text-white text-24 font-500 leading-[4rem] mt-72">
            2023년에 시작된 KUIT은 어느덧 6기를 맞이했습니다.
            <br />
            KUIT은 학기 중에는 파트별로 스터디를 진행하며,
            <br />
            방학 중에는 Android, Web, Server 파트와 PM, 디자이너가 협업하여 프로젝트를 진행합니다.
            <br />
          </p>

          <p className="text-main text-32 font-700 leading-[5rem] mt-72">
            KUIT 6기 모집이 시작됩니다.
            <br />한 학기 동안 함께 성장할 여러분의 지원을 기다리고 있습니다!
          </p>
        </div>

        <div className="flex-center flex-col">
          <h2 className="text-white text-48 font-700">Projects</h2>

          <p className="text-white text-24 font-500 leading-[4rem] mt-44">
            스터디가 끝난 후,
            <br />
            <span className="text-main font-700">PM, 디자이너, 프론트엔드, 백엔드</span>가
            <br />한 팀이 되어 프로젝트 개발이 진행됩니다.
          </p>

          <h3 className="text-white text-32 font-700 mt-24">
            KUIT에서 진행된 프로젝트를 확인해보세요!
          </h3>

          <div
            className="w-[95vw] max-w-1308 mx-auto mt-60 mb-60 overflow-x-auto custom-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: '#4FE570 #1a1a1a',
            }}
          >
            <div className="flex flex-row flex-nowrap gap-32 pb-8">
              {projectList.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </div>

          <GreenButton
            text="프로젝트 더 보기 ->"
            isBig={false}
            onClick={() => navigate('/projects')}
          />
        </div>

        <StaffContent />

        <div className="flex-center flex-col mb-260">
          <h2 className="text-white text-48 font-700">KUIT 6기 주요 일정</h2>
          <p className="text-white text-24 font-500 leading-[4rem] mt-12">
            일정을 클릭해 상세 내용을 확인해보세요!
          </p>

          <EventCardGrid />
        </div>
      </div>

      <SNSInquiryBtn />
    </div>
  );
};

export default Home;
