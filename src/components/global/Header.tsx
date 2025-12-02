import { Link, NavLink, useLocation } from 'react-router-dom';
import KUITLogo from '../../assets/imgs/KUITLogo.svg';
import LoginButton from './LoginButton';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkItem = ({ to, children }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-700 text-20 transition-colors duration-200 ${
          isActive ? 'text-main' : 'text-white hover:text-border'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

interface HeaderProps {
  isMovable?: boolean;
}

const Header = ({ isMovable = false }: HeaderProps) => {
  return (
    <header
      className={`w-full h-[141px] flex items-center justify-between px-40 bg-gray z-floating transition-all duration-300
        ${isMovable ? 'relative' : 'fixed top-0'} 
      `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[58px]">
          <div className="flex gap-[58px] items-center">
            <Link to="/">
              <img src={KUITLogo} alt="KUIT Logo" className="min-w-[63px]" />
            </Link>

            <NavLinkItem to="/recruit">Recruit</NavLinkItem>
            {/* <NavLinkItem to="/projects">Projects</NavLinkItem>
            <NavLinkItem to="/articles">KUITLog</NavLinkItem>
            <NavLinkItem to="/portfolio/list">Portfolio</NavLinkItem>
            <NavLinkItem to="/keyword">Keyword</NavLinkItem> */}
            <NavLinkItem to="/team-matching">Team matching</NavLinkItem>
          </div>
        </div>

        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
