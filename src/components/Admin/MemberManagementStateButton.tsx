import { MemberManagementType } from '../../constants/MemberManagementConstants';

interface MemberManagementStateButtonProps {
  type: MemberManagementType;
}

const typeClass = {
  대기: 'bg-lightGray',
  승인: 'bg-main',
  거부: 'bg-[#FF5252]',
} as const;

const MemberManagementStateButton = ({ type }: MemberManagementStateButtonProps) => {
  return (
    <button
      type="button"
      className="flex flex-center w-156 h-56 border-2 border-border bg-gray rounded-[6px] gap-8"
    >
      <div className={`w-16 h-16 rounded-full ${typeClass[type]}`}></div>
      <span className="text-white text-20 font-700">{type}</span>
    </button>
  );
};

export default MemberManagementStateButton;
