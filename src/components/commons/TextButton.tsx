interface TextButtonProps {
  text: string;
  onClick?: () => void;
  px?: string;
  py?: string;
  isActive?: boolean;
}

const TextButton = ({ text, onClick, px, py, isActive = false }: TextButtonProps) => {
  const baseClasses = `text-24 font-700 rounded-8 whitespace-nowrap transition-colors duration-200 ${px} ${py}`;
  const activeClasses = 'bg-main text-[#2C373F] border-none';
  const inactiveClasses = 'bg-gray text-white border border-[#868686]';

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      disabled={!isActive}
    >
      {text}
    </button>
  );
};

export default TextButton;
