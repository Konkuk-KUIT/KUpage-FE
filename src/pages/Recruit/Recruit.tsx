import RecruitDescriptionBlock from '../../components/recruit/RecruitDescriptionBlock';
import RecruitHeader from '../../components/recruit/RecruitHeader';

const Recruit = () => {
  return (
    <div className="relative">
      <div
        className="min-h-screen w-full flex flex-col"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <RecruitHeader />

        <div className="flex-center flex-col gap-100">
          <h2 className="text-white text-48 font-700">모집 개요</h2>
          <div className="flex gap-52">
            <RecruitDescriptionBlock
              title="KUIT의 인재상"
              content={`책임감을 가지고 팀과 함께\n프로덕트를 만들어\n나갈 수 있는 누구나!`}
              isBig={true}
            />

            <RecruitDescriptionBlock
              title="지원 자격"
              content={`지원 자격입니다. 지원 자격\n입니다. 지원 자격입니다. 지\n원 자격입니다.`}
              isBig={true}
            />

            <RecruitDescriptionBlock
              title="KUIT의 인재상"
              content={
                <div className="text-white text-24 text-center">
                  <p className="font-700">1차 서류</p>
                  <p className="font-500">지원서 작성 및 포트폴리오 제출</p>

                  <p className="font-700 mt-28">1차 서류</p>
                  <p className="font-500">지원서 작성 및 포트폴리오 제출</p>
                </div>
              }
              isBig={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
