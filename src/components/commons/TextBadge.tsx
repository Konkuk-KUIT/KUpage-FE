import clsx from 'clsx';

interface Props {
  text: string;
  className?: string;
}

/**
 * 그냥 텍스트만 표시하는 단순한 뱃지
 */
const TextBadge = ({ text, className }: Props) => {
  return (
    <div
      className={clsx(
        'border-border inline-flex self-start items-center justify-center h-[48px] px-24 rounded-24 border-[2px] text-20 font-700',
        className
      )}
    >
      {text}
    </div>
  );
};

export default TextBadge;
