import RoundedSquareButton from '../../commons/RoundedSquareButton';

const IdeaRegisterHeader = () => {
  return (
    <div className="w-full h-[207px] flex flex-row justify-between items-center">
      <h1 className="text-[32px] md:text-[64px] font-700">아이디어 등록하기</h1>
      <RoundedSquareButton text={'완료하기'} />
    </div>
  );
};

export default IdeaRegisterHeader;
