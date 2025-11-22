import { DetailedHTMLProps, InputHTMLAttributes, useId } from 'react';

export interface InputBoxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
}

/**
 * 공용 텍스트 input
 * @warning `onChange`타입이 기존 SignupInputBox와 다름
 */
const InputBox = ({
  label,
  placeholder = '',
  helperText = '',
  errorText = '',
  isError = false,
  ...inputAttributes
}: InputBoxProps) => {
  const id = useId();

  return (
    <div className="flex flex-col mt-8 text-white w-full max-w-full relative">
      <div className="flex justify-between items-center mb-12">
        <label htmlFor={inputAttributes.id || id} className="text-24 font-700 text-left">
          {label}
        </label>
        {helperText && <span className="text-13 font-400 text-[#D5DA40]">{helperText}</span>}
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray border-2 border-[#868686] border-solid rounded-8 px-16 py-12 text-16 transition"
        {...inputAttributes}
      />
      {isError && <span className="absolute left-8 top-100 text-[#D5DA40]">{errorText}</span>}
    </div>
  );
};

export default InputBox;
