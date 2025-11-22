import clsx from 'clsx';
import type { Dispatch, SetStateAction } from 'react';
import {
  applicantPart,
  APPLY_VIEW,
  ApplyStateResponse,
  ApplyView,
} from '../../../types/applyStateTypes';
import { userType } from '../../../pages/TeamMatching/ApplyState/ApplyState';
import ApplyStateCardCounts from './ApplyStateCardCounts';
import ApplyStateCardInfo from './ApplyStateCardInfo';

interface Props {
  applyData: ApplyStateResponse;
  setViewType: Dispatch<SetStateAction<ApplyView>>;
  setSelectedTeamId: Dispatch<SetStateAction<number | null>>;
}

const ApplyStateCard = ({ applyData, setViewType, setSelectedTeamId }: Props) => {
  const clickHandler = () => {
    setViewType(APPLY_VIEW.Detail);
    setSelectedTeamId(applyData.teamId);
  };

  function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    return Object.fromEntries(keys.map((key) => [key, obj[key]])) as Pick<T, K>;
  }
  const keysToUse = [
    'androidApplicantNum',
    'iosApplicantNum',
    'webApplicantNum',
    'serverApplicantNum',
    'designApplicantNum',
  ] as const;

  const parsedApplyData = pick(applyData, ...keysToUse);

  const mapData = applicantPart.map((part, idx) => ({
    idx: idx,
    label: part,
    value: parsedApplyData[keysToUse[idx]],
  }));

  return (
    <div
      className={clsx(
        'group h-200 flex flex-row border-2 border-solid rounded-10 border-border cursor-pointer hover:border-main',
        userType === 'general' && 'w-[50%]',
        userType !== 'general' && 'w-full'
      )}
      onClick={clickHandler}
    >
      <ApplyStateCardInfo applyData={applyData} />
      {userType !== 'general' && <ApplyStateCardCounts mapData={mapData} />}
    </div>
  );
};

export default ApplyStateCard;
