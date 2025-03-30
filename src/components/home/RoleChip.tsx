interface RoleChipProps {
  role: string;
  isSelected: boolean;
  onClick: () => void;
}

const RoleChip = ({ role, isSelected, onClick }: RoleChipProps) => {
  return (
    <button
      className={`px-24 py-12 rounded-full text-20 font-700 ${isSelected ? 'bg-main text-gray' : 'border-2 border-border bg-gray text-white'}`}
      onClick={onClick}
    >
      {role}
    </button>
  );
};

export default RoleChip;
