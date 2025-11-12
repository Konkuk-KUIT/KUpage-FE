import TextChip from '../commons/TextChip';

interface ProjectCohortTabsProps {
  options: string[];
  isSelected: string[];
  setIsSelected: (value: string[]) => void;
  checkedLimit: number;
}

const SelectableChipGroup = ({
  options,
  isSelected,
  setIsSelected,
  checkedLimit,
}: ProjectCohortTabsProps) => {
  const onClick = (option: string) => {
    if (isSelected.includes(option)) {
      setIsSelected(isSelected.filter((item) => item !== option));
    } else if (isSelected.length < checkedLimit) {
      setIsSelected([...isSelected, option]);
    }
  };
  return (
    <div className="flex items-center flex-wrap gap-[19px]">
      {options.map((option) => (
        <TextChip
          key={option}
          text={option}
          isSelected={isSelected.includes(option)}
          onClick={() => onClick(option)}
        ></TextChip>
      ))}
    </div>
  );
};

export default SelectableChipGroup;
