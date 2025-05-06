import BigKUITLogo from '../../assets/imgs/BIGKUITLogo.svg';
import KuitAnimation from '../../components/commons/KuitAnimation';
import TextButton from '../../components/commons/TextButton';

const Login = () => {
  return (
    <div className="flex items-center justify-center gap-52 bg-signup-gradient min-h-screen w-full px-40 md:px-120 overflow-x-hidden">
      <div className="hidden md:block">
        <img src={BigKUITLogo} alt="KUIT Logo" className="min-w-[55rem]" />
      </div>
      <div className="text-left md:mx-0">
        <div className="flex flex-col items-center md:h-[40rem] ">
          <h1 className="text-48 md:text-80 font-800">
            <KuitAnimation />
          </h1>
          <p className="text-24 md:text-32 font-500 mt-12">
            <span className="text-white">건국대학교 기획/개발 동아리</span> <br />
            <span className="text-main font-600">KUIT</span>
            <span className="text-white">에 오신 걸 환영합니다.</span>
          </p>
        </div>
        <div className="mt-32">
          <TextButton text="디스코드로 로그인하기" px="px-80 md:px-160" py="py-16 md:py-20" />
        </div>
      </div>
    </div>
  );
};

export default Login;
