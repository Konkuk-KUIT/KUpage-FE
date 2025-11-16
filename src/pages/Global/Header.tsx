import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import KUITLogo from '../../assets/imgs/KUITLogo.svg';

import LeaderIcon from '/Leader.svg';

/**
 * todo: api와 연동
 */
const isLogin: boolean = true;

const LoginButton = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    // TODO: 로그아웃 로직 추가
    console.log('로그아웃');
    setIsDropdownOpen(false);
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative z-floating" ref={dropdownRef}>
      {isLogin ? (
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-[123px] h-[69px] gap-8 px-12 py-8 border border-border rounded-full cursor-pointer hover:bg-[#203636] transition-colors"
          >
            {/* todo: 임시로 파트장 프로필 이미지 사용 */}
            <img src={LeaderIcon} alt="Profile" className="w-[55px] h-[55px] rounded-full" />
            <img
              src={ArrowDown}
              alt="Toggle"
              className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* 드롭다운 메뉴 */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-[160px] border border-border rounded-[8px] shadow-lg overflow-hidden z-floating bg-[#27373f]">
              <button
                onClick={handleMyPageClick}
                className="w-full px-16 py-12 text-left text-white text-16"
              >
                마이페이지
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-16 py-12 text-left text-white text-16"
              >
                로그아웃
              </button>
            </div>
          )}
        </>
      ) : (
        <Link
          to="/login"
          className="px-24 py-8 rounded-full bg-gray border border-border text-white font-bold text-20"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full h-[141px] flex items-center justify-between px-40 bg-gray">
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

        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
