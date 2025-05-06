interface ProjectCohortTabProps {
  cohort: string;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCohortTab = ({ cohort, isSelected, onClick }: ProjectCohortTabProps) => {
  return (
    <button
      className={`px-[40px] py-[9px] rounded-[100px] text-20 font-700 ${isSelected ? 'bg-main text-gray' : 'bg-gray border-2 border-solid border-border text-white'}`}
      onClick={onClick}
    >
      {cohort}
    </button>
  );
};

export default ProjectCohortTab;
