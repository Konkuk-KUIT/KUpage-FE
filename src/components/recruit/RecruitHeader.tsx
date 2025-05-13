import GreenButton from '../commons/GreenButton';
import BigKUITLogo from '../../assets/imgs/BIGKUITLogo.svg';

const today = new Date();
// todo: 임의로 설정한 모집 기간 추후 수정하기
const recruitStart = new Date('2025-09-01');
const recruitEnd = new Date('2025-09-31');

const isRecruiting = today >= recruitStart && today <= recruitEnd;

const RecruitHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-white text-left ml-44">
          {isRecruiting ? (
            <>
              <h1 className="text-80 font-700 text-main mb-4 mt-68">
                KUIT 6기 모집이 시작되었어요!
              </h1>
              <p className="text-40 font-700 mb-48">
                한 학기 동안 함께 성장할 여러분의 지원을 기다리고 있습니다!
              </p>
              <GreenButton
                text="KUIT 6기 지원하러 가기 ->"
                isBig={true}
                onClick={() => {
                  // todo: 지원 링크로 수정
                }}
              />
            </>
          ) : (
            <>
              <h1 className="text-88 font-700 mt-56">지금은 모집기간이 아닙니다</h1>
              {/* todo: 모집 예정 기간 수정 */}
              <p className="text-24 font-500 mt-32 mb-32">
                5기 모집이 완료되었습니다! <br />
                다음 기수는 2025년 9월에 예정되어 있습니다.
              </p>
              <GreenButton
                text="KUIT 6기 모집 사전 알림 등록하러 가기 ->"
                isBig={true}
                onClick={() => {
                  // todo: 알림 받기 기능 구현
                }}
              />
            </>
          )}
        </div>

        <img src={BigKUITLogo} alt="KUIT Logo" className="w-[34rem] mr-64 mt-76" />
      </div>

      <div className="w-full h-8 bg-gray mt-32" />
    </>
  );
};

export default RecruitHeader;
