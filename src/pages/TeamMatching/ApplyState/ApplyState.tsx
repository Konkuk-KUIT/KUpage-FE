import ApplyStateHeader from '../../../components/TeamMatching/ApplyState/ApplyStateHeader';
import ApplyStateCard from '../../../components/TeamMatching/ApplyState/ApplyStateCard';
import ApplyStateDetailContainer from '../../../components/TeamMatching/ApplyState/ApplyStateDetailContainer';
import { useState } from 'react';
import { APPLY_VIEW, ApplyStateResponse, ApplyView } from '../../../types/applyStateTypes';
import { useQuery } from '@tanstack/react-query';
import useApplyState from '../../../hooks/useApplyState';

export const userType: string = 'general';

const ApplyState = () => {
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
        applyData?.success ? (
          <div
            className="flex-1 mt-8 p-48 bg-darkblue flex flex-col gap-20"
            style={{
              background:
                'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
            }}
          >
            <>
              {userType === 'admin' &&
                Array.isArray(applyData) &&
                applyData.map((team) => (
                  <ApplyStateCard
                    key={team.teamId}
                    applyData={team}
                    setViewType={setViewType}
                    setSelectedTeamId={setSelectedTeamId}
                  />
                ))}
              {userType === 'pm' && applyData && !Array.isArray(applyData) && (
                <ApplyStateCard
                  applyData={applyData.result as ApplyStateResponse}
                  setViewType={setViewType}
                  setSelectedTeamId={setSelectedTeamId}
                />
              )}
              {userType === 'general' && applyData && !Array.isArray(applyData) && (
                <ApplyStateCard
                  applyData={applyData.result as ApplyStateResponse}
                  setViewType={setViewType}
                  setSelectedTeamId={setSelectedTeamId}
                />
              )}
            </>
          </div>
        ) : (
          <div
            className="flex-1 mt-8 p-92 bg-darkblue flex flex-col gap-20 text-24 font-400"
            style={{
              background:
                'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
            }}
          >
            {applyData?.message}
          </div>
        )
      ) : (
        applicantData && <ApplyStateDetailContainer applicantData={applicantData} />
      )}
    </div>
  );
};

export default ApplyState;
