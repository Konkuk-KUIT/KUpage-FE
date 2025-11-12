import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ProjectApplySchema,
  projectApplySchema,
} from '../../../components/TeamMatching/ProjectApply/schema/projectApplySchema';

const ProjectApply = () => {
  const methods = useForm<ProjectApplySchema>({
    resolver: zodResolver(projectApplySchema),
    defaultValues: {
      motivation: '',
      appliedPart: [],
      portfolioUrl: undefined,
    },
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        className="h-full [background:var(--1,linear-gradient(180deg,#16202B_0%,#1E2C33_50.01%,#203636_100%))]"
      >
        <ProjectApplyHeader />
        <ProjectApplyBody />
      </form>
    </FormProvider>
  );
};

export default ProjectApply;
