import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';
import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import {
  ProjectApplySchema,
  projectApplySchema,
} from '../../../components/TeamMatching/ProjectApply/schema/projectApplySchema';
import { notification } from '../../../constants/ProjectApply/notification.constants';
import { useAvailableParts } from '../../../hooks/useAvailableParts';
import useUserStore from '../../../hooks/useUserStore';
import { TeamInfo } from '../../../types/teamMatchingApiTypes';
import { partExtractor } from '../../../utils/authorization';

interface LocationState {
  teamData?: TeamInfo;
}

const ProjectApply = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const teamData = state?.teamData;
  const { auths } = useUserStore();
  const availableParts = useAvailableParts(teamData);

  const defaultPart = useMemo(() => {
    if (!teamData) return undefined;

    const userPart = partExtractor(auths);

    // 우선순위에 따라 default part 결정
    if (userPart.has('Web_App') && availableParts.some((p) => p.value === 'Web')) {
      return 'Web';
    }
    if (userPart.has('Native_App') && availableParts.some((p) => p.value === 'Android')) {
      return 'Android';
    }
    if (userPart.has('Server') && availableParts.some((p) => p.value === 'Server')) {
      return 'Server';
    }
    return undefined;
  }, [auths, availableParts, teamData]);

  const methods = useForm<ProjectApplySchema>({
    resolver: zodResolver(projectApplySchema),
    defaultValues: {
      motivation: '',
      portfolioUrl: undefined,
      appliedPart: defaultPart,
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
