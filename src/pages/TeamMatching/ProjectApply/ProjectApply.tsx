import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ProjectApplySchema,
  projectApplySchema,
} from '../../../components/TeamMatching/ProjectApply/schema/projectApplySchema';
import { useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { TeamInfo } from '../../../types/teamMatchingApiTypes';
import { notification } from '../../../constants/ProjectApply/notification.constants';
import useUserStore from '../../../hooks/useUserStore';
import { partExtractor } from '../../../utils/authorization';

interface LocationState {
  teamData?: TeamInfo;
}

const ProjectApply = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const teamData = state?.teamData;
  const { auths } = useUserStore();
  const userPart = partExtractor(auths);
  const getDefaultPart = () => {
    if (userPart.has('Web_App')) return 'Web';
    if (userPart.has('Native_App')) return 'Android';
    if (userPart.has('Server')) return 'Server';
    return undefined;
  };


  const methods = useForm<ProjectApplySchema>({
    resolver: zodResolver(projectApplySchema),
    defaultValues: {
      motivation: '',
      portfolioUrl: undefined,
      appliedPart: getDefaultPart(),
    },
    mode: 'onChange',
    shouldFocusError: false,
  });

  if (!teamData)
    return (
      <div className="w-full min-h-screen flex-center">
        <Loader2 className="w-20 h-20 animate-spin text-main" />
      </div>
    );

  return (
    <FormProvider {...methods}>
      <form noValidate className="min-h-screen bg-gradient">
        <ProjectApplyHeader teamId={teamData.teamId} />

        <div className="px-48 pb-48 pt-16">
          <pre className="whitespace-pre-wrap font-sans text-24 leading-[35px] text-left">
            {notification}
          </pre>
        </div>
        <ProjectApplyBody teamData={teamData} />
      </form>
    </FormProvider>
  );
};

export default ProjectApply;
