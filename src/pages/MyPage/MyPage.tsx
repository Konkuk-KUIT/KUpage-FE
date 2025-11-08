import classNames from 'classnames';
import { Check, Pencil } from 'lucide-react';

import Github from '../../assets/imgs/Github.svg';
import ArticleCard, { type ArticleCardProps } from '../../components/Article/ArticleCard';

import LeaderIcon from '/Leader.svg';

/**
 * TODO: 임시로 게시글이 비었는지, 안비었는지 확인하기 위함
 */
const isEmpty: boolean = false;
/**
 * TODO: 수정 버튼 클릭 시 수정 페이지로 이동하기 위함
 */
const isEdit: boolean = false;
/**
 * TODO: 게시글 데이터, key props를 위한 임시 id 추가
 */
const tempArticles: ({ id: number } & ArticleCardProps)[] = [
  {
    id: 1,
    title: '첫 번째 게시글입니다',
    userName: '나윤상',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'KUIT 프로젝트 회고',
    userName: '나윤상',
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    title: 'React 학습 정리',
    userName: '나윤상',
    createdAt: '2024-03-10',
  },
  {
    id: 4,
    title: 'TypeScript 꿀팁 공유',
    userName: '나윤상',
    createdAt: '2024-04-05',
  },
];

const MyPage = () => {
  return (
    <div
      className="min-h-screen w-full px-40 py-60 flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%)',
      }}
    >
      <div className="w-full mb-36">
        {/* 프로필 섹션 */}
        <section className="flex items-center justify-between w-full mb-80">
          <div className="flex items-center gap-32">
            <img src={LeaderIcon} alt="Profile" className="w-160 h-160 rounded-full" />
            <div className="flex flex-col">
              <div className="flex items-center gap-8 text-white text-32 font-700 mb-8">
                <p>나윤상</p>
                <a href="https://github.com/">
                  <img src={Github} alt="Github" className="w-32 h-32 rounded-full" />
                </a>
              </div>
              <p className="text-white text-20 font-400 mb-28">example@konkuk.ac.kr</p>
              <div className="flex items-center justify-center px-24 py-8 border-border border-2 bg-gray rounded-full">
                <p className="text-white text-24 font-500">역할 역할 역할</p>
              </div>
            </div>
          </div>
          <button className="px-28 py-24 rounded-10 bg-gray border border-border text-white font-700 text-24">
            수정하기
          </button>
        </section>
      </div>
      <div className="flex justify-end w-full mb-24">
        <button
          className={classNames(
            'p-16 rounded-full w-60 h-60 flex items-center justify-center',
            isEdit ? 'bg-main' : 'bg-gray border border-border'
          )}
        >
          {isEdit ? (
            <Check size={30} color="#000" strokeWidth={3} />
          ) : (
            <Pencil size={30} color="#fff" strokeWidth={2} />
          )}
        </button>
      </div>
      <hr className="border-border" />
      {/* 게시글 섹션 */}
      {isEmpty ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white text-24 font-700">작성한 게시글이 없어요.</p>
        </div>
      ) : (
        <div className="flex-1 py-40">
          <div className="grid grid-cols-4 gap-32">
            {tempArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                userName={article.userName}
                createdAt={article.createdAt}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
