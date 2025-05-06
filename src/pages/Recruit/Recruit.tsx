import RecruitHeader from '../../components/recruit/RecruitHeader';

const Recruit = () => {
  return (
    <div className="relative">
      <div
        className="min-h-screen w-full"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <RecruitHeader />
      </div>
    </div>
  );
};

export default Recruit;
