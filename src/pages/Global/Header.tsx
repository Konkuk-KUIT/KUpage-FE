import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import KUITLogo from '../../assets/imgs/KUITLogo.svg';

import LeaderIcon from '/Leader.svg';

/**
 * todo: api와 연동
 */
const isLogin = true;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
    <header className="w-full h-[141px] flex items-center justify-between px-40 bg-gradient-to-b from-[#16202B] via-[#1E2C33] to-[#203636] border-b-2 border-[#3D5053] relative z-nav">
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
        <div className="relative z-floating" ref={dropdownRef}>
          {isLogin ? (
            <>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-[123px] h-[69px] gap-8 px-12 py-8 bg-[#1E2C33] border border-[#3D5053] rounded-full cursor-pointer hover:bg-[#203636] transition-colors"
              >
                {/* todo: 임시로 파트장 프로필 이미지 사용 */}
                <img src={LeaderIcon} alt="Profile" className="w-[55px] h-[55px] rounded-full" />
                <img
                  src={ArrowDown}
                  alt="Toggle"
                  className={`w-[24px] h-[24px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* 드롭다운 메뉴 */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] w-[160px] bg-[#1E2C33] border border-[#3D5053] rounded-[8px] shadow-lg overflow-hidden z-floating">
                  <button
                    onClick={handleMyPageClick}
                    className="w-full px-16 py-12 text-left text-white text-16 hover:bg-[#203636] transition-colors"
                  >
                    마이페이지
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-16 py-12 text-left text-white text-16 hover:bg-[#203636] transition-colors"
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
      </div>
    </header>
  );
};

export default Header;
