import clsx from 'clsx';
import TextBadge from '../../commons/TextBadge';
import type { Dispatch, SetStateAction } from 'react';
import { ApplyView } from '../../../types/applyState';
import useApplyState from '../../../hooks/useApplyState';

const mockData = [
  {
    id: 0,
    label: 'Android',
    val: 2,
  },
  {
    id: 1,
    label: 'iOS',
    val: 5,
  },
  {
    id: 2,
    label: 'Android',
    val: 2,
  },
  {
    id: 3,
    label: 'Android',
    val: 0,
  },
  {
    id: 4,
    label: 'Android',
    val: 2,
  },
];

interface Props {
  setViewType: Dispatch<SetStateAction<ApplyView>>;
}

const ApplyStateCard = ({ setViewType }: Props) => {
  const { getApplicantStateData } = useApplyState();
  const clickHandler = () => {};
  return (
    <div
      className="group w-full h-200 flex flex-row border-2 border-solid rounded-10 border-border cursor-pointer hover:border-main"
      onClick={clickHandler}
    >
      <div className="w-[50%] flex flex-col gap-12 px-28 py-24 bg-gray rounded-l-10 text-left group-hover:bg-main group-hover:text-darkblue">
        <h2 className="text-32 font-600">Chat Diary</h2>
        <h3 className="text-24 font-700">아아아아아</h3>
        <div className="flex flex-row items-center justify-between">
          <span className="text-24 font-500">skdlnsdf</span>
          <TextBadge text={'Android'} className="group-hover:border-darkblue" />
        </div>
      </div>
      <div className="w-[50%] flex flex-row items-center gap-12 p-20 group-hover:bg-main/25">
        {mockData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex-1 min-w-0 h-full p-16 flex flex-col justify-end items-center bg-gray rounded-10 group-hover:bg-main group-hover:text-darkblue"
            >
              <span
                className={clsx(
                  'text-48 font-700',
                  data.val === 0 && 'text-[#757575] group-hover:text-[rgba(52,52,52,0.37)]'
                )}
              >
                {data.val}
              </span>
              <span
                className={clsx(
                  'text-20 font-700',
                  data.val === 0 && 'text-[#757575] group-hover:text-[rgba(52,52,52,0.37)]'
                )}
              >
                {data.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplyStateCard;
