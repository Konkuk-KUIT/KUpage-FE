import { DetailedHTMLProps, SelectHTMLAttributes, useId } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Option {
  value: string;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface SelectBoxProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  label: string;
  options: Option[];
}

/**
 * 공용 Select 필드 컴포넌트
 * @warning `onChange`, `options` 타입이 기존 SignupSelectBox와 다름
 */
const SelectBox = ({ label, options, ...selectAttributes }: SelectBoxProps) => {
  const id = useId();

  return (
    <div className="flex flex-col mt-8 text-white w-full max-w-[100%] relative">
      <label className="mb-12 text-24 font-700 text-left" htmlFor={selectAttributes.id || id}>
        {label}
      </label>
      <select
        id={selectAttributes.id || id}
        className="w-full bg-gray border-2  border-[#868686] border-solid rounded-8 px-16 py-12 text-16 appearance-none"
        {...selectAttributes}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled} selected={opt.selected}>
            {opt.label ?? opt.value}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-12 top-3/4 -translate-y-1/2 w-20 h-20 " />
    </div>
  );
};

export default SelectBox;
