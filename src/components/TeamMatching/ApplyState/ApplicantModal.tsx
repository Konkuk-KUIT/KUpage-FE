import { Applicant, ApplicantStateResponse } from '../../../types/applyStateTypes';
import TextBadge from '../../commons/TextBadge';

interface Props {
  onClose: () => void;
  applicantData: Applicant;
}

const ApplicantModal = ({ onClose, applicantData }: Props) => {
  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.37)]"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-40 items-end w-808 h-auto px-52 py-40 rounded-20 z-10 bg-[linear-gradient(180deg,_#17222C_0%,_#203536_100%)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col items-start gap-24">
          <h1 className="text-36 font-700">{applicantData.applicantMemberNameAndPart}</h1>
          <TextBadge text={applicantData.part} />
        </div>

        <div className="w-full flex flex-col items-start gap-24">
          <h3 className="text-24 font-600">포트폴리오</h3>
          <div className="w-full h-60 rounded-10 bg-border flex items-center justify-start px-20 py-16 text-24 font-700">
            {applicantData.applicantDetail.portfolioUrl}
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-24">
          <h3 className="text-24 font-600">지원 동기</h3>
          <div className="w-full px-24 py-20 border-border border-2 bg-gray rounded-10 text-left">
            {applicantData.applicantDetail.additionalAnswer1}
            {applicantData.applicantDetail.additionalAnswer2}
          </div>
        </div>

        <button
          className="group flex justify-center items-center w-140 h-72 rounded-10 bg-gray border-2 border-border hover:bg-main hover:border-main"
          onClick={onClose}
        >
          <span className="text-24 font-700 group-hover:text-darkblue">닫기</span>
        </button>
      </div>
    </div>
  );
};

export default ApplicantModal;
