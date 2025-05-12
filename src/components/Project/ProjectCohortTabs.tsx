import { Dispatch, SetStateAction } from 'react';
import { COHORT } from '../../constants/CohortConstants';
import ProjectCohortTab from './ProjectCohortTab';

interface ProjectCohortTabsProps {
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<string>>;
}

const ProjectCohortTabs = ({ isSelected, setIsSelected }: ProjectCohortTabsProps) => {
  const cohorts = ['All', ...Object.values(COHORT)];
  return (
    <div className="flex items-center gap-[19px]">
      {cohorts.map((cohort) => (
        <ProjectCohortTab
          key={cohort}
          cohort={cohort}
          isSelected={isSelected == cohort}
          onClick={() => setIsSelected(cohort)}
        ></ProjectCohortTab>
      ))}
    </div>
  );
};

export default ProjectCohortTabs;
