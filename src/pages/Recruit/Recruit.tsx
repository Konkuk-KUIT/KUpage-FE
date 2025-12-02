import SNSInquiryBtn from '../../components/home/SNSInquiryBtn';
import CurriculumCarousel from '../../components/recruit/CurriculumCarousel';
import FAQAccordion from '../../components/recruit/FAQAccordion';
import RecruitDescriptionBlock from '../../components/recruit/RecruitDescriptionBlock';
import RecruitFieldSection from '../../components/recruit/RecruitFieldSection';
import RecruitHeader from '../../components/recruit/RecruitHeader';

const Recruit = () => {
  return (
    <div className="relative">
      <div className="min-h-screen w-full flex flex-col bg-gradient">
        <RecruitHeader />

        <div className="flex-center flex-col pt-68 gap-320 mb-176">
          <div className="flex-center flex-col gap-100">
            <h2 className="text-white text-48 font-700">모집 개요</h2>
            <div className="flex gap-52">
              <RecruitDescriptionBlock
                title="KUIT의 인재상"
                content={`책임감을 가지고 팀과 함께\n프로덕트를 만들어\n나갈 수 있는 누구나!`}
                isBig={true}
              />

              {/* <RecruitDescriptionBlock
                title="지원 자격"
                content={`건국대학교 소속\n재학생/휴학생/졸업유예생`}
                isBig={true}
              /> */}

              <RecruitDescriptionBlock
                title="지원 방법"
                content={
                  <div className="text-white text-24 text-center">
                    <p className="font-700">1차 서류</p>
                    <p className="font-500">지원서 작성 및 포트폴리오 제출</p>

                    <p className="font-700 mt-28">2차 면접</p>
                    <p className="font-500">대면 면접 이후 최종 합격</p>
                  </div>
                }
                isBig={true}
              />
            </div>
          </div>

          <div className="flex-center flex-col gap-60">
            <h2 className="text-white text-48 font-700">모집 일정</h2>

            <div className="grid grid-cols-2 gap-x-80 gap-y-60">
              <RecruitDescriptionBlock
                title="서류 접수"
                content="일정 확정 후 공지 예정입니다."
                isBig={false}
              />
              <RecruitDescriptionBlock
                title="서류 결과 발표"
                content="일정 확정 후 공지 예정입니다."
                isBig={false}
              />
              <RecruitDescriptionBlock
                title="대면 면접"
                content="일정 확정 후 공지 예정입니다."
                isBig={false}
              />
              <RecruitDescriptionBlock
                title="최종 결과 발표"
                content="일정 확정 후 공지 예정입니다."
                isBig={false}
              />
            </div>
          </div>

          <div className="flex-center flex-col gap-32">
            <h2 className="text-white text-48 font-700">모집 분야</h2>
            <RecruitFieldSection />
          </div>

          <div className="flex-center flex-col gap-40">
            <div className="flex-center flex-col gap-20 text-white">
              <h2 className="text-48 font-700">커리큘럼</h2>
              <p className="text-24 font-500 leading-[4rem]">
                KUIT 5기는 Android, Web, Server, PM 파트로 이루어져 있고, <br />
                학기 중 9주간 스터디가 진행됩니다.
              </p>
              <h3 className="text-32 font-700">희망하는 파트의 커리큘럼을 확인해보세요!</h3>
            </div>
            <CurriculumCarousel />
          </div>

          <div className="flex-center flex-col gap-40">
            <h2 className="text-white text-48 font-700">자주 묻는 질문</h2>
            <FAQAccordion />
          </div>
        </div>
      </div>

      <SNSInquiryBtn />
    </div>
  );
};

export default Recruit;
