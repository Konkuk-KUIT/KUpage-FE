interface TextButtonProps {
  text: string;
  onClick?: () => void;
  px?: string;
  py?: string;
}
const TextButton = ({ text, onClick, px, py }: TextButtonProps) => {
  return (
    <>
      <button
        className={`text-24 font-700 text-white bg-gray border-border rounded-8  whitespace-nowrap ${px} ${py}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default TextButton;
