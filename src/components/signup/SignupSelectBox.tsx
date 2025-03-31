import { ChevronDown } from 'lucide-react';

interface SelectBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SignupSelectBox = ({ label, value, onChange, options }: SelectBoxProps) => {
  return (
    <div className="flex flex-col mt-8 text-white w-full max-w-[100%] relative">
      <label className="mb-12 text-24 font-700 text-left">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray border-2  border-[#868686] border-solid rounded-8 px-16 py-12 text-16 appearance-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-12 top-3/4 -translate-y-1/2 w-20 h-20 " />
    </div>
  );
};

export default SignupSelectBox;
