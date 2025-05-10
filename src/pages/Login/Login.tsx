import BigKUITLogo from '../../assets/imgs/BIGKUITLogo.svg';
import KuitAnimation from '../../components/commons/KuitAnimation';
import TextButton from '../../components/commons/TextButton';
const Login = () => {
  const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_DISCORD_REDIRECT_URI)}&response_type=code&scope=identify%20email`;

  const handleDiscordLogin = () => {
    window.location.href = DISCORD_AUTH_URL;
  };

  return (
    <div className="flex items-center justify-between bg-signup-gradient  min-h-screen w-screen px-120">
      <img src={BigKUITLogo} alt="KUIT Logo" className="w-[55rem]" />
      <div className="text-left justify-between">
        <div className="h-[40rem]">
          <h1 className="text-80 font-800">
            <span className="text-main">KU </span>
            <span className="text-white">CAN DO</span>
            <span className="text-main"> IT</span>
          </h1>
          <p className="text-24 md:text-32 font-500 mt-12">
            <span className="text-white">건국대학교 기획/개발 동아리</span> <br />
            <span className="text-main font-600">KUIT</span>
            <span className="text-white">에 오신 걸 환영합니다.</span>
          </p>
        </div>
        <div className="mt-32">
          <TextButton
            text="디스코드로 로그인하기"
            px="px-160"
            py="py-20"
            onClick={handleDiscordLogin}
            isActive={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
