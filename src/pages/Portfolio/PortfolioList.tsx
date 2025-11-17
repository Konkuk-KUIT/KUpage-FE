import PortfolioListCard from '../../components/portfolio/PortfolioListCard';
import PortfolioListHeader from '../../components/portfolio/PortfolioListHeader';

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: '문제 해결을 통해 더 나은 경험을 만드는 서비스 기획자, 이지유입니다.',
    datetime: '10/09 04:33',
    tags: ['#프로젝트', '#학력', '#연합동아리'],
    userInfo: '이지유 - 5th PM 선임파트장',
    roles: ['Design', 'PM'],
    likeCount: 30,
    viewCount: 54,
  },
  {
    id: 2,
    title: '문제 해결을 통해 더 나은 경험을 만드는 서비스 기획자, 이지유입니다.',
    datetime: '10/09 04:33',
    tags: ['#프로젝트', '#학력', '#연합동아리'],
    userInfo: '이지유 - 5th PM 선임파트장',
    roles: ['Design', 'PM'],
    likeCount: 30,
    viewCount: 54,
  },
  {
    id: 3,
    title: '문제 해결을 통해 더 나은 경험을 만드는 서비스 기획자, 이지유입니다.',
    datetime: '10/09 04:33',
    tags: ['#프로젝트', '#학력', '#연합동아리'],
    userInfo: '이지유 - 5th PM 선임파트장',
    roles: ['Design', 'PM'],
    likeCount: 30,
    viewCount: 54,
  },
];

const PortfolioList = () => {
  return (
    <div className="relative">
      <div
        className="min-h-screen w-full pb-552"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <PortfolioListHeader />
        <div className="flex flex-col gap-32 px-72 py-56">
          {PORTFOLIO_DATA.map((item) => (
            <PortfolioListCard
              key={item.id}
              title={item.title}
              datetime={item.datetime}
              tags={item.tags}
              userInfo={item.userInfo}
              roles={item.roles}
              likeCount={item.likeCount}
              viewCount={item.viewCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
