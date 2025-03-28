interface GreenButtonProps {
  text: string;
  isBig: boolean;
  onClick?: () => void;
}

const GreenButton = ({ text, isBig, onClick }: GreenButtonProps) => {
  return (
    <>
      <button
        className={`flex-center bg-main h-68 rounded-full text-gray text-24 font-700 whitespace-nowrap ${isBig ? 'w-488' : 'w-252'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default GreenButton;
