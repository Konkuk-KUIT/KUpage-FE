import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import { useState } from 'react';

interface DropdownProps {
  currentOption: string;
  setCurrentOption: (value: string) => void;
  options: object;
  width?: number;
  height?: number;
  textSize?: number;
  fontWeight?: number;
}

const Dropdown = ({
  currentOption,
  setCurrentOption,
  options,
  width = 144,
  height = 56,
  textSize = 16,
  fontWeight = 500,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative text-white" style={{ width, height }}>
      <button
        className={`flex justify-between items-center px-16 w-full h-full bg-gray rounded-t-10 ${!isFocused && 'rounded-b-10'} border-2 border-border border-solid text-24 font-400 box-border`}
        onClick={() => setIsFocused((prev) => !prev)}
        onBlur={() => setIsFocused(false)}
      >
        <span> {currentOption}</span>
        <img src={ArrowDown} className={`w-24 h-24 ${isFocused && 'rotate-180'}`} />
      </button>
      {isFocused && (
        <ul
          className="absolute top-full left-0 right-0 rounded-b-10 border-2 border-border border-solid text-${textSize} font-${fontSize} bg-[#1F3134]"
          style={{ fontSize: `${textSize}px`, fontWeight }}
        >
          {Object.values(options).map((option) => (
            <li
              key={option}
              onMouseDown={() => {
                setCurrentOption(option);
              }}
              className="px-16 py-4 text-start cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
