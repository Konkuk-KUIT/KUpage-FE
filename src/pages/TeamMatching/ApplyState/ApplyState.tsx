import ApplyStateHeader from '../../../components/TeamMatching/ApplyState/ApplyStateHeader';
import ApplyStateCard from '../../../components/TeamMatching/ApplyState/ApplyStateCard';
import ApplyStateDetailContainer from '../../../components/TeamMatching/ApplyState/ApplyStateDetailContainer';
import { useEffect, useState } from 'react';
import { APPLY_VIEW, ApplyStateResponse, ApplyView } from '../../../types/applyStateTypes';
import { useQuery } from '@tanstack/react-query';
import useApplyState from '../../../hooks/useApplyState';
import useUserStore from '../../../hooks/useUserStore';
import { teamMatchingAuthExtractor } from '../../../utils/authorization';
import { ApplyStateContext } from '../../../components/TeamMatching/ApplyState/ApplyStateContext';
import { Loader2 } from 'lucide-react';

const ApplyState = () => {
  const [viewType, setViewType] = useState<ApplyView>(APPLY_VIEW.List);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const { getApplyStateData, getApplicantStateData } = useApplyState();
  const auths = useUserStore((state) => state.auths);
  const userType = teamMatchingAuthExtractor(auths);

  const {
    isLoading: isApplyLoading,
    isError,
    data: applyData,
    error,
  } = useQuery({
    queryKey: ['apply-state'],
    queryFn: () => getApplyStateData(),
  });

  const { isLoading: isApplicantLoading, data: applicantData } = useQuery({
    queryKey: ['applicant-state', selectedTeamId],
    queryFn: () => getApplicantStateData(selectedTeamId!),
    enabled: viewType === APPLY_VIEW.Detail && selectedTeamId !== null,
  });

  if (isApplyLoading || isApplicantLoading) {
    return (
      <div className="w-full h-full flex flex-col bg-gray">
        <div className="w-full min-h-screen flex-center">
          <Loader2 className="w-20 h-20 animate-spin text-main" />
        </div>
      </div>
    );
  }

  return (
    <ApplyStateContext.Provider value={{ userType }}>
      <div className="w-full h-full flex flex-col bg-gray relative">
        <ApplyStateHeader viewType={viewType} setViewType={setViewType} />
        {viewType === APPLY_VIEW.List ? (
          applyData?.success ? (
            <div className="min-h-screen mt-8 p-48 bg-darkblue flex flex-col gap-20 bg-gradient">
              <>
                {userType === 'admin' &&
                  Array.isArray(applyData.result) &&
                  applyData.result.map((team) => (
                    <ApplyStateCard
                      key={team.teamId}
                      applyData={team}
                      setViewType={setViewType}
                      setSelectedTeamId={setSelectedTeamId}
                    />
                  ))}
                {userType === 'pm' && applyData && !Array.isArray(applyData.result) && (
                  <ApplyStateCard
                    applyData={applyData.result as ApplyStateResponse}
                    setViewType={setViewType}
                    setSelectedTeamId={setSelectedTeamId}
                  />
                )}
                {userType === 'general' && applyData && !Array.isArray(applyData.result) && (
                  <ApplyStateCard
                    applyData={applyData.result as ApplyStateResponse}
                    setViewType={setViewType}
                    setSelectedTeamId={setSelectedTeamId}
                    responseCode={applyData.code}
                  />
                )}
              </>
            </div>
          ) : (
            <div className="min-h-screen mt-8 p-92 bg-darkblue flex flex-col gap-20 text-24 font-400 bg-gradient">
              {applyData?.message}
            </div>
          )
        ) : (
          applicantData && <ApplyStateDetailContainer applicantData={applicantData} />
        )}
      </div>
    </ApplyStateContext.Provider>
  );
};

export default ApplyState;
