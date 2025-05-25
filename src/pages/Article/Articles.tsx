import { useState } from 'react';
import ProjectCohortTabs from '../../components/Project/ProjectCohortTabs';
import SNSInquiryBtn from '../../components/home/SNSInquiryBtn';
import ArticleCard from '../../components/Article/ArticleCard';

const Articles = () => {
  const [isSelected, setIsSelected] = useState('All');
  return (
    <div className="relative">
      <div className="flex flex-col gap-52 bg-gray min-h-screen w-screen px-76 py-100">
        <div className="flex flex-col justify-center items-center gap-20">
          <h3 className="text-48 font-700 text-white">KUITLog</h3>
          <span className="text-24 font-500 text-main">다양한 IT 관련 소식을 확인해보세요.</span>
          <ProjectCohortTabs isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <div className="grid grid-rows-4 grid-cols-4 gap-32">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              userName={article.userName}
              createdAt={article.createdAt}
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

export default Articles;

const articles = [
  {
    id: 1,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 2,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 3,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 4,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 5,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 6,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 7,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 8,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 9,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },

  {
    id: 10,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 11,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 12,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 13,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 14,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 15,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 16,
    title: '프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화',
    userName: '김태정',
    createdAt: '2025-05-01T12:00:00Z',
  },
];
