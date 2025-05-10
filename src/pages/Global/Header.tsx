import { Link } from 'react-router-dom';

import KUITLogo from '../../assets/imgs/KUITLogo.svg';

const Header = () => {
  return (
    <header className="w-full h-[141px] flex items-center justify-between px-40 bg-gradient-to-b from-[#16202B] via-[#1E2C33] to-[#203636] border-b-2 border-[#3D5053]">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-[58px]">
          {/* KUIT Logo could go here */}
          <div className="flex gap-[58px] items-center">
            <Link to="/">
              <img src={KUITLogo} alt="KUIT Logo" className="min-w-[63px]" />
            </Link>

            <Link to="/recruit" className="text-white font-bold text-20">
              Recruit
            </Link>
            <Link to="/projects" className="text-white font-bold text-20">
              Projects
            </Link>
            <Link to="/kuitlog" className="text-white font-bold text-20">
              KUITLog
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-24 py-8 rounded-full bg-gray border border-border text-white font-bold text-20"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
