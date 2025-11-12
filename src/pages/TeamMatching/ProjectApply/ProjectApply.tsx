import React from 'react';
import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';

const ProjectApply = () => {
  return (
    <div className="h-full [background:var(--1,linear-gradient(180deg,#16202B_0%,#1E2C33_50.01%,#203636_100%))]">
      <ProjectApplyHeader />
      <ProjectApplyBody />
    </div>
  );
};

export default ProjectApply;
