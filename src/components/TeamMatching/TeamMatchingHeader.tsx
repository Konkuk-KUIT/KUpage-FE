import RoundedSquareButton from '../commons/RoundedSquareButton';

const TeamMatchingHeader = () => {
  return (
    <div className="relative w-full h-[300px] flex flex-row justify-start items-center p-[47px] bg-[#16202b]">
      <div className="w-[70%] flex flex-col items-start gap-[10px]">
        <h1 className="font-[700] text-[64px]">Team Matching</h1>
        <h3 className="font-[600] text-[32px] text-left">
          PM들의 프로젝트 아이디어를 살펴보고, 함께 하고싶은 프로젝트에 지원해보세요!
        </h3>
      </div>
      <div className="w-[30%] flex flex-row justify-end">
        <RoundedSquareButton>아이디어 등록하기</RoundedSquareButton>
      </div>
      {/* TODO : PM 계정만 이 요소 보이도록 수정 */}
      <div className="absolute bottom-[10px] right-[10px] font-[700] text-[24px] cursor-pointer">
        지원결과 확인 →
      </div>
    </div>
  );
};

export default TeamMatchingHeader;
