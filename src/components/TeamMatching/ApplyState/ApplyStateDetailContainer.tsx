import { useState } from 'react';
import { ApplicantPart, applicantPart, ApplicantStateResponse } from '../../../types/applyState';
import ApplicantCard from './ApplicantCard';
import ApplicantModal from './ApplicantModal';

interface Props {
  applicantData: ApplicantStateResponse;
}

const ApplyStateDetailContainer = ({ applicantData }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedApplicant, setClickedApplicant] = useState<number | undefined>(undefined);
  const [clickedAppType, setClickedAppType] = useState<ApplicantPart | undefined>(undefined);

  const selectedApplicant =
    clickedAppType && clickedApplicant !== null
      ? applicantData.applicantMap.applicants[clickedAppType].find(
          (a) => a.applicantId === clickedApplicant
        )
      : undefined;

  return (
    <div className="w-full flex-1 flex flex-col justify-start bg-darkblue">
      <div className="w-full h-auto flex flex-col items-start gap-24 px-56 py-36 bg-gray">
        <h2 className="text-32 font-600">{applicantData.serviceName}</h2>
        <h3 className="text-24 font-700">{applicantData.nameAndPart}</h3>
        <div className="flex items-center justify-center text-20 font-700 h-48 px-[23px] rounded-24 border-2 border-border">
          {applicantData.appType}
        </div>
        <div className="w-full border-2 border-border rounded-10 px-24 py-28">
          {applicantData.topicSummary}
        </div>
      </div>
      {/*  */}
      <div className="w-full px-56 py-48 flex flex-col gap-76">
        {applicantPart.map((part, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-16">
              <div className="text-48 font-600 text-left">{part}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
                {applicantData.applicantMap.applicants[part]?.map((applicant, index) => {
                  return (
                    <ApplicantCard
                      key={index}
                      applicantId={applicant.applicantId}
                      nameAndPart={applicant.applicantMemberNameAndPart}
                      part={applicant.part}
                      setIsModalOpen={setIsModalOpen}
                      setClickedApplicant={setClickedApplicant}
                      setClickedAppType={setClickedAppType}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && selectedApplicant && (
        <ApplicantModal onClose={() => setIsModalOpen(false)} applicantData={selectedApplicant} />
      )}
    </div>
  );
};

export default ApplyStateDetailContainer;
