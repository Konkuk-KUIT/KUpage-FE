import clsx from 'clsx';

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

export interface NewTextButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  color: 'gray' | 'main';
}
/**
 * 확장성을 위한 새로운 텍스트 버튼: ui 설정만 격리
 */
export const NewTextButton = ({ children, className, color, ...attr }: NewTextButtonProps) => {
  return (
    <button
      className={clsx(
        `text-24 font-700 rounded-8 whitespace-nowrap transition-colors duration-200 px-[28px] py-[25px] cursor-pointer border leading-[19px]`,
        color === 'gray' ? 'bg-gray text-white border border-border' : 'bg-main text-gray',
        className
      )}
      {...attr}
    >
      {children}
    </button>
  );
};

export default TextButton;
