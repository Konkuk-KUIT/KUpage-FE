import ApplyStateHeader from '../../../components/TeamMatching/ApplyState/ApplyStateHeader';
import ApplyStateCard from '../../../components/TeamMatching/ApplyState/ApplyStateCard';
import ApplyStateDetailContainer from '../../../components/TeamMatching/ApplyState/ApplyStateDetailContainer';
import { useState } from 'react';
import { APPLY_VIEW, ApplyView } from '../../../types/applyState';
import { useQuery } from '@tanstack/react-query';
import useApplyState from '../../../hooks/useApplyState';

const ApplyState = () => {
  const userType: string = 'admin';

  const [viewType, setViewType] = useState<ApplyView>(APPLY_VIEW.List);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const { getApplyStateData, getApplicantStateData } = useApplyState();
  const {
    isPending,
    isError,
    data: applyData,
    error,
  } = useQuery({
    queryKey: ['apply-state'],
    queryFn: () => getApplyStateData(),
  });

  const { data: applicantData } = useQuery({
    queryKey: ['applicant-state', selectedTeamId],
    queryFn: () => getApplicantStateData(selectedTeamId!),
    enabled: viewType === APPLY_VIEW.Detail && selectedTeamId !== null,
  });

  return (
    <div className="w-full h-full flex flex-col bg-gray">
      <ApplyStateHeader viewType={viewType} setViewType={setViewType} />
      {viewType === APPLY_VIEW.List ? (
        <div className="flex-1 mt-8 p-48 bg-darkblue flex flex-col gap-20">
          {userType === 'admin' &&
            Array.isArray(applyData) &&
            applyData.map((team) => (
              <ApplyStateCard
                key={team.teamId}
                setViewType={setViewType}
                setSelectedTeamId={setSelectedTeamId}
                teamId={team.teamId}
              />
            ))}
          {(userType === 'pm' || userType === 'general') && !Array.isArray(applyData) && (
            <ApplyStateCard
              setViewType={setViewType}
              setSelectedTeamId={setSelectedTeamId}
              teamId={applyData!.teamId}
            />
          )}
        </div>
      ) : (
        applicantData && <ApplyStateDetailContainer applicantData={applicantData} />
      )}
    </div>
  );
};

export default ApplyState;
