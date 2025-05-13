import { useState } from 'react';
import ProjectCohortTabs from '../../components/Project/ProjectCohortTabs';
import ProjectDetailCard from '../../components/Project/ProjectDetailCard';
import SNSInquiryBtn from '../../components/home/SNSInquiryBtn';

const Projects = () => {
  const [isSelected, setIsSelected] = useState('All');
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center gap-[30px] bg-gray min-h-screen w-screen">
        <h1 className="text-64 font-700 text-white">Projects</h1>
        <span className="text-32 font-700 text-white leading-[1.25]">
          KUIT에서 진행된 프로젝트를 확인해보세요!
        </span>
        <ProjectCohortTabs isSelected={isSelected} setIsSelected={setIsSelected} />
        <div className="grid grid-cols-3 gap-[42px]">
          {projects.map((project) => (
            <ProjectDetailCard
              key={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              info={project.info}
              subInfo={project.subInfo}
            />
          ))}
        </div>
      </div>
      <button
        className="px-[45px] py-[20px] rounded-[10px] border border-solid border-border 
        hover:bg-main text-white hover:text-[#18242D] absolute top-[65px] right-[70px]"
      >
        <span className="text-24 font-700">등록하기</span>
      </button>
      <SNSInquiryBtn />
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: 1,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: 'Chat Diary',
    info: '가장 쉬운 일기 습관',
    subInfo: '#3기 #Web #Android',
  },
  {
    id: 2,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: '방울이',
    info: '내가 키우는 뽀모도로',
    subInfo: '#3기 #Web #Android',
  },
  {
    id: 3,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: 'Beering',
    info: '나만의 맥주 취향 아카이빙 서비스',
    subInfo: '#3기 #Web #Android',
  },
  {
    id: 4,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: 'Chat Diary',
    info: '가장 쉬운 일기 습관',
    subInfo: '#3기 #Web #Android',
  },
  {
    id: 5,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: '방울이',
    info: '내가 키우는 뽀모도로',
    subInfo: '#3기 #Web #Android',
  },
  {
    id: 6,
    imgSrc: 'https://placehold.co/331X257/grey/grey',
    title: 'Beering',
    info: '나만의 맥주 취향 아카이빙 서비스',
    subInfo: '#3기 #Web #Android',
  },
];
