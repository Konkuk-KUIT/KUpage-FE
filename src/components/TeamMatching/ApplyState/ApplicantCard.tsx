import TextBadge from '../../commons/TextBadge';
import { Applicant } from '../../../types/applyStateTypes';

interface Props {
  applicant: Applicant;
  onClick: (applicant: Applicant) => void;
}

const ApplicantCard = ({ applicant, onClick }: Props) => {
  return (
    <div
      className="group h-156 border-2 border-solid border-border bg-gray px-28 py-32 flex flex-col gap-12 rounded-10 text-left hover:bg-main hover:border-main cursor-pointer hover:text-darkblue"
      onClick={() => onClick(applicant)}
    >
      <span className="text-24 font-500 whitespace-nowrap">
        {applicant.applicantMemberNameAndPart}
      </span>
      <TextBadge text={applicant.part} className="group-hover:border-darkblue" />
    </div>
  );
};

export default ApplicantCard;
