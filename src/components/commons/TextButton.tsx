interface TextButtonProps {
  text: string;
  onClick?: () => void;
}
const TextButton = ({ text, onClick }: TextButtonProps) => {
  return (
    <>
      <button className="text-20 font-700 text-white bg-no" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default TextButton;
