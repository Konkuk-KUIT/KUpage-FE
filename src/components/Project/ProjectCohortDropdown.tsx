import { COHORT } from '../../constants/CohortConstants';
import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import { useState } from 'react';

interface ProjectCohortDropdownProps {
  currentCohort: string;
  setCurrentCohort: (value: string) => void;
}

const ProjectCohortDropdown = ({ currentCohort, setCurrentCohort }: ProjectCohortDropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-144 h-56 text-white">
      <button
        className={`flex justify-between items-center px-16 w-full h-full bg-gray rounded-t-10 ${!isFocused && 'rounded-b-10'} border-2 border-border border-solid text-24 font-400 box-border`}
        onClick={() => setIsFocused((prev) => !prev)}
        onBlur={() => setIsFocused(false)}
      >
        <span> {currentCohort}</span>
        <img src={ArrowDown} className={`w-24 h-24 ${isFocused && 'rotate-180'}`} />
      </button>
      {isFocused && (
        <ul className="absolute top-full left-0 right-0 rounded-b-10 border-2 border-border border-solid text-16 font-500 bg-[#1F3134]">
          {Object.values(COHORT).map((cohort) => (
            <li
              key={cohort}
              onMouseDown={() => {
                setCurrentCohort(cohort);
              }}
              className="px-16 py-4 text-start cursor-pointer"
            >
              {cohort}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCohortDropdown;
