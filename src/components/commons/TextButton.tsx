interface TextButtonProps {
  text: string;
  onClick?: () => void;
}
const TextButton = ({ text, onClick }: TextButtonProps) => {
  return (
    <>
      <button
        className="text-24 font-700 text-white bg-gray border-border rounded-8 px-160 py-20 whitespace-nowrap"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default TextButton;
