import { Dispatch, SetStateAction } from 'react';
import TextBadge from '../../commons/TextBadge';
import { ApplicantPart } from '../../../types/applyStateTypes';

interface Props {
  applicantId: number;
  nameAndPart: string;
  part: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setClickedApplicant: Dispatch<SetStateAction<number | undefined>>;
  setClickedAppType: Dispatch<SetStateAction<ApplicantPart | undefined>>;
}

const ApplicantCard = ({
  applicantId,
  nameAndPart,
  part,
  setIsModalOpen,
  setClickedApplicant,
  setClickedAppType,
}: Props) => {
  const clickHandler = () => {
    setIsModalOpen(true);
    setClickedApplicant(applicantId);
    setClickedAppType(part as ApplicantPart);
  };
  return (
    <div
      className="group h-156 border-2 border-solid border-border bg-gray px-28 py-32 flex flex-col gap-12 rounded-10 text-left hover:bg-main hover:border-main cursor-pointer hover:text-darkblue"
      onClick={clickHandler}
    >
      <span className="text-24 font-500 whitespace-nowrap">{nameAndPart}</span>
      <TextBadge text={part} className="group-hover:border-darkblue" />
    </div>
  );
};

export default ApplicantCard;
