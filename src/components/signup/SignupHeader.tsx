import ChevronLeft from '../../assets/imgs/ChevronLeft.svg';

interface SignupHeaderProps {
  nowStep: number;
  title: string;
  onClick: () => void;
}

const SignupHeader = ({ nowStep, title, onClick }: SignupHeaderProps) => {
  return (
    <div className="flex flex-col text-white ">
      <div className="flex text-20 font-400 justify-between">
        <img src={ChevronLeft} alt="backButtonImg" onClick={onClick} />

        <span>{nowStep}/3</span>
      </div>
      <p className="text-left px-80 py-40 text-36 font-800">{title}</p>
    </div>
  );
};

export default SignupHeader;
