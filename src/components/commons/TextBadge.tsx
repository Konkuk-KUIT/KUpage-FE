interface Props {
  text: string;
}

/**
 * 그냥 텍스트만 표시하는 단순한 뱃지
 */
const TextBadge = ({ text }: Props) => {
  return (
    <div className="inline-flex self-start items-center justify-center h-[48px] px-24 rounded-24 border-[2px]">
      {text}
    </div>
  );
};

export default TextBadge;
