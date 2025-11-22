import clsx from 'clsx';
import { userType } from '../../../pages/TeamMatching/ApplyState/ApplyState';
import { ApplyStateResponse } from '../../../types/applyStateTypes';
import TextBadge from '../../commons/TextBadge';

interface Props {
  applyData: ApplyStateResponse;
}

const ApplyStateCardLeft = ({ applyData }: Props) => {
  return (
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
  );
};

export default ApplyStateCardLeft;
