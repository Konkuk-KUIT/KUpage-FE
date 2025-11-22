import clsx from 'clsx';
import TextBadge from '../../commons/TextBadge';
import type { Dispatch, SetStateAction } from 'react';
import {
  applicantPart,
  APPLY_VIEW,
  ApplyStateResponse,
  ApplyView,
} from '../../../types/applyStateTypes';
import { userType } from '../../../pages/TeamMatching/ApplyState/ApplyState';

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
      <div
        className={clsx(
          'w-[50%] flex flex-col gap-12 px-28 py-24 bg-gray  text-left group-hover:bg-main group-hover:text-darkblue',
          userType === 'general' && 'w-full rounded-10',
          userType !== 'general' && 'w-[50%] rounded-l-10'
        )}
      >
        <h2 className="text-32 font-600">{applyData.serviceName}</h2>
        <h3 className="text-24 font-700">{applyData.topicSummary}</h3>
        <div className="flex flex-row items-center justify-between">
          <span className="text-24 font-500">{applyData.nameAndPart}</span>
          <TextBadge text={'Android'} className="group-hover:border-darkblue" />
        </div>
      </div>
      {userType !== 'general' && (
        <div className="w-[50%] flex flex-row items-center gap-12 p-20 group-hover:bg-main/25">
          {mapData.map((data) => {
            return (
              <div
                key={data.idx}
                className="flex-1 min-w-0 h-full p-16 flex flex-col justify-end items-center bg-gray rounded-10 group-hover:bg-main group-hover:text-darkblue"
              >
                <span
                  className={clsx(
                    'text-48 font-700',
                    data.value === 0 && 'text-[#757575] group-hover:text-[rgba(52,52,52,0.37)]'
                  )}
                >
                  {data.value}
                </span>
                <span
                  className={clsx(
                    'text-20 font-700',
                    data.value === 0 && 'text-[#757575] group-hover:text-[rgba(52,52,52,0.37)]'
                  )}
                >
                  {data.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApplyStateCard;
