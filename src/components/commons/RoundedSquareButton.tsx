import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const RoundedSquareButton = ({ children, className, disabled, onClick, ...rest }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-[45px] py-[20px] rounded-10 border border-solid border-border hover:bg-main text-white hover:text-[#18242D] transition-all duration-200 text-24 font-700 flex flex-center',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default RoundedSquareButton;
