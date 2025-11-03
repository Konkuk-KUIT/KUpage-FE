import { useState } from 'react';
import Search from '../../assets/imgs/Search.svg';
import ProjectFormToggle from './ProjectFormToggle';

interface ProjectFormInputProps {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  max: number;
  isSearch?: boolean;
  isToggle?: boolean;
  isLength?: boolean;
  maxToggleCount?: number;
}

const ProjectFormInput = ({
  value,
  onChange,
  max,
  isSearch,
  isToggle,
  isLength,
  maxToggleCount,
}: ProjectFormInputProps) => {
  const [inputText, setInputText] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isToggle && e.key === 'Enter' && inputText.trim().length > 0) {
      e.preventDefault();
      setInputText('');
      if (maxToggleCount && maxToggleCount < value.length) return;
      onChange([...value, inputText]);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    if (!isToggle) onChange(text);
  };
  return (
    <div className="w-full h-auto">
      <div className="relative flex items-center w-full rounded-10 border-2 border-solid border-border bg-gray px-24 py-20">
        <input
          value={inputText}
          type="text"
          maxLength={max}
          className="w-full h-full text-white text-24 font-400"
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleChange(e)}
        />
        {isSearch && <img src={Search} className="" />}
        {isLength && (
          <span className="absolute right-16 bottom-12 text-white">
            {inputText.length}/{max}
          </span>
        )}
      </div>
      <div className="flex gap-12 flex-wrap pt-16">
        {isToggle &&
          Array.isArray(value) &&
          value.map((toggle) => (
            <ProjectFormToggle
              toggleText={toggle}
              onClick={() => onChange(value.filter((currentToggle) => currentToggle !== toggle))}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectFormInput;
