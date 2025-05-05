interface TextButtonProps {
  text: string;
  onClick?: () => void;
  px?: string;
  py?: string;
  isActive?: boolean;
}

const TextButton = ({
  text,
  onClick,
  px = 'px-12',
  py = 'py-8',
  isActive = false,
}: TextButtonProps) => {
  const baseClasses = `text-24 font-700 rounded-8 whitespace-nowrap transition-colors duration-200 ${px} ${py} cursor-pointer border`;
  const activeClasses = 'bg-main text-gray';
  const inactiveClasses = 'bg-gray text-white border border-border';

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
