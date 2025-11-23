import { HTMLAttributes, useEffect, useState } from 'react';
import { TeamInfo } from '../../types/teamMatchingApiTypes';
import TextBadge from '../commons/TextBadge';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: TeamInfo;
  selectedTeamId: number | undefined;
}

const TeamCard = ({ data, selectedTeamId, ...rest }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTeamId === data.teamId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedTeamId]);

  return (
    <div
      className={clsx(
        'group w-full flex flex-col p-[29px] items-start justify-between text-left rounded-8 border-[2px] border-border cursor-pointer bg-gray hover:bg-main hover:border-main transition-all duration-200',
        isSelected && 'bg-main border-main'
      )}
      {...rest}
    >
      <div className="w-full flex flex-col gap-[5px]">
        <div
          className={clsx(
            'text-32 font-600 group-hover:text-darkblue',
            isSelected && 'text-darkblue'
          )}
        >
          {data.serviceName}
        </div>
        <div
          className={clsx(
            'text-24 font-700 group-hover:text-darkblue',
            isSelected && 'text-darkblue'
          )}
        >
          {data.topicSummary}
        </div>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div
          className={clsx(
            'flex items-center justify-center group-hover:text-darkblue',
            isSelected && 'text-darkblue'
          )}
        >
          {data.ownerName}
        </div>
        <TextBadge
          text={data.appType}
          className={clsx(
            'group-hover:text-darkblue group-hover:border-darkblue',
            isSelected && 'text-darkblue border-darkblue'
          )}
        />
      </div>
    </div>
  );
};

export default TeamCard;
