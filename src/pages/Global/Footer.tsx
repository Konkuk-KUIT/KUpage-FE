import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-32 bg-gradient-to-b from-[#16202B] via-[#1E2C33] to-[#203636]">
      <div className="max-w-full px-44 flex justify-between items-center">
        <div className="flex gap-24">
          <div className="text-white text-[15px] font-medium text-left">
            <p>KUIT</p>
            <p>건국대학교 기획/개발 동아리</p>
          </div>

          <Link
            to="/creators"
            className="py-12 px-24 text-white text-20 font-700 bg-gray border-2 border-solid rounded-full"
          >
            만든 사람들
          </Link>
        </div>

        <div className="text-white text-[15px] font-medium leading-[1.19em] text-right">
          <p>ⓒ 2025 KUIT. All rights reserved.</p>
          <p>Designed & Developed by KUIT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
