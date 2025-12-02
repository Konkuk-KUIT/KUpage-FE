import clsx from 'clsx';
import { ApplyStateResponse } from '../../../types/applyStateTypes';
import TextBadge from '../../commons/TextBadge';
import { ApplyStateContext } from './ApplyStateContext';
import { useContext } from 'react';
import { getAppTypeDisplay } from '../../../utils/appType';

interface Props {
  applyData: ApplyStateResponse;
}

const ApplyStateCardInfo = ({ applyData }: Props) => {
  const { userType } = useContext(ApplyStateContext)!;

  return (
    <div
      className={clsx(
        'w-[50%] flex flex-col gap-12 px-28 py-24 bg-gray  text-left group-hover:bg-main group-hover:text-darkblue',
        userType === 'general' && 'w-full rounded-10',
        userType !== 'general' && 'w-[50%] rounded-l-10'
      )}
    >
      <h2 className="text-32 font-600 overflow-hidden truncate">{applyData.serviceName}</h2>
      <h3 className="text-24 font-700 overflow-hidden truncate">{applyData.topicSummary}</h3>
      <div className="flex flex-row items-center justify-between">
        <span className="text-24 font-500">
          {applyData.ownerNameAndPart || applyData.nameAndPart}
        </span>
        <TextBadge
          text={getAppTypeDisplay(applyData.appType as string)}
          className="group-hover:border-darkblue"
        />
      </div>
    </div>
  );
};

export default ApplyStateCardInfo;
