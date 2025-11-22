import clsx from 'clsx';
import { ApplicantPart } from '../../../types/applyStateTypes';

interface Props {
  mapData: { idx: number; label: ApplicantPart; value: number | undefined }[];
}

const ApplyStateCardCounts = ({ mapData }: Props) => {
  return (
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
  );
};

export default ApplyStateCardCounts;
