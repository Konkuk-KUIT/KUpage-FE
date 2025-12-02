import { Applicant } from '../../../types/applyStateTypes';
import TextBadge from '../../commons/TextBadge';

interface Props {
  onClose: () => void;
  applicantData: Applicant;
}

const ApplicantModal = ({ onClose, applicantData }: Props) => {
  return (
    <div
      className="flex h-full justify-center items-center fixed top-40 left-0 w-full bg-[rgba(0,0,0,0.37)]"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-40 items-end w-808 max-h-[730px] h-auto px-52 py-40 rounded-20 z-10 bg-gradient"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col items-start gap-24">
          <h1 className="text-36 font-700">{applicantData.applicantMemberNameAndPart}</h1>
          <TextBadge text={applicantData.part} />
        </div>

        <div className="w-full flex flex-col items-start gap-24">
          <h3 className="text-24 font-600">포트폴리오</h3>
          <input
            type="text"
            value={applicantData.applicantDetail.portfolioUrl}
            readOnly
            onClick={() => window.open(applicantData.applicantDetail.portfolioUrl, '_blank')}
            className="
      w-full h-60 rounded-10 bg-border 
      px-20 py-16 text-24 font-700
      overflow-x-auto whitespace-nowrap
      cursor-pointer
      focus:outline-none
    "
          />
        </div>

        <div className="w-full flex flex-col items-start gap-24">
          <h3 className="text-24 font-600">지원 동기</h3>
          <div className="w-full max-h-200 overflow-y-scroll px-24 py-20 border-border border-2 bg-gray rounded-10 text-left text-20 font-400 leading-[35px] whitespace-pre-wrap break-words">
            {applicantData.applicantDetail.motivation}
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
