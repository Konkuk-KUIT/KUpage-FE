import RoundedSquareButton from '../commons/RoundedSquareButton';
import RightUpArrow from '../../assets/imgs/RightUpArrow.svg';

const TeamMatchingDetailContainer = () => {
  const pdf = '/KUpage-FE/hw2.pdf';

  const openPdfWithNewWindow = () => {
    window.open(pdf);
  };

  return (
    <main className="w-full h-full flex flex-col justify-start gap-[20px]">
      <RoundedSquareButton>이 프로젝트 지원하기</RoundedSquareButton>

      <section className="w-full flex flex-col items-start gap-[22px]">
        <div className="font-600 text-[32px]">ChatDiary</div>
        <div className="font-700 text-[24px]">ChatDiary</div>
        <div className="inline-flex self-start items-center justify-center h-[48px] px-24 rounded-24 border-[2px]">
          Android
        </div>
        <div className="w-full whitespace-pre-line border-[2px] border-[gray] min-h-[20rem] rounded-[10px] px-[22px] py-[25px]">
          원인 파악을 도와줄 추가 정보(원한다면) 사용하는 브라우저 / WebView 종류(버전 포함)
          tailwind.config.js의 content 설정 devtools에서 article의 computed 스타일 캡처 GitHub
          Copilot
        </div>
        <img className="w-full h-[414px] rounded-[10px]" src="" alt="프로젝트 이미지" />
      </section>

      <section className="w-full flex flex-col items-start gap-[22px]">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="font-600 text-[32px]">서비스 소개서</div>
          <div
            className="flex flex-row items-center gap-[10px] font-700 text-[24px] cursor-pointer"
            onClick={() => openPdfWithNewWindow()}
          >
            <img src={RightUpArrow} className="w-16" />
            원본 보기
          </div>
        </div>
        <iframe className="w-full h-[457px] rounded-[10px]" src={pdf}></iframe>
      </section>

      <section className="w-full flex flex-col items-start gap-[22px]">
        <div className="font-600 text-[32px]">우리 서비스의 기능 요구사항이에요!</div>
        <div className="w-full whitespace-pre-line border-[2px] border-[gray] min-h-[20rem] rounded-[10px] px-[22px] py-[25px]">
          원인 파악을 도와줄 추가 정보(원한다면) 사용하는 브라우저 / WebView 종류(버전 포함)
          tailwind.config.js의 content 설정 devtools에서 article의 computed 스타일 캡처 GitHub
          Copilot
        </div>
      </section>

      <section className="w-full flex flex-col items-start gap-[22px]">
        <div className="font-600 text-[32px]">이런 팀원을 찾고 있어요!</div>
        <div className="w-full whitespace-pre-line border-[2px] border-[gray] min-h-[20rem] rounded-[10px] px-[22px] py-[25px]">
          원인 파악을 도와줄 추가 정보(원한다면) 사용하는 브라우저 / WebView 종류(버전 포함)
          tailwind.config.js의 content 설정 devtools에서 article의 computed 스타일 캡처 GitHub
          Copilot
        </div>
      </section>
    </main>
  );
};

export default TeamMatchingDetailContainer;
