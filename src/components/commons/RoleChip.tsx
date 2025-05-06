interface TextChipProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const TextChip = ({ text, isSelected, onClick }: TextChipProps) => {
  return (
    <button
      className={`px-24 py-12 rounded-full text-20 font-700 ${isSelected ? 'bg-main text-gray' : 'border-2 border-border bg-gray text-white'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextChip;
