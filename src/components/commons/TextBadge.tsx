import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

/**
 * 그냥 텍스트만 표시하는 단순한 뱃지
 */
const TextBadge = ({ text, className, ...rest }: Props) => {
  return (
    <div
      className={clsx(
        'border-border inline-flex self-start items-center justify-center h-[48px] px-24 rounded-24 border-[2px] text-20 font-700',
        className
      )}
      {...rest}
    >
      {text}
    </div>
  );
};

export default TextBadge;
