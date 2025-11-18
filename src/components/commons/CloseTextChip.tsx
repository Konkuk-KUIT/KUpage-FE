import CloseIcon from '../../assets/imgs/XBtn.svg';

interface CloseTextChipProps {
  text: string;
  onRemove: () => void;
}

const CloseTextChip = ({ text, onRemove }: CloseTextChipProps) => (
  <div className="flex items-center gap-16 px-24 py-12 text-20 font-700 border-solid border-2 border-border bg-gray text-white rounded-full">
    <span>{text}</span>
    <button onClick={onRemove}>
      <img src={CloseIcon} />
    </button>
  </div>
);

export default CloseTextChip;
