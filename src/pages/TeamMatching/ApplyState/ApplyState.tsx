import ApplyStateHeader from '../../../components/TeamMatching/ApplyState/ApplyStateHeader';
import ApplyStateCard from '../../../components/TeamMatching/ApplyState/ApplyStateCard';
import ApplyStateDetailContainer from '../../../components/TeamMatching/ApplyState/ApplyStateDetailContainer';
import { useState } from 'react';
import { APPLY_VIEW, ApplyView } from '../../../types/applyState';
import { useQuery } from '@tanstack/react-query';
import useApplyState from '../../../hooks/useApplyState';

const ApplyState = () => {
  const [viewType, setViewType] = useState<ApplyView>(APPLY_VIEW.List);
  const { getApplyStateData } = useApplyState();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['apply-state'],
    queryFn: () => getApplyStateData(),
  });

  return (
    <div className="w-full h-full flex flex-col bg-gray">
      <ApplyStateHeader />
      <div className="flex-1 mt-8 p-48 bg-darkblue">
        <ApplyStateCard setViewType={setViewType} />
      </div>
      <ApplyStateDetailContainer />
    </div>
  );
};

export default ApplyState;
