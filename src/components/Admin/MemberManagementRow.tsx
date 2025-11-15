import TextButton from '../commons/TextButton';
import MemberManagementChip from './MemberManagementChip';
import MemberManagementStateButton from './MemberManagementStateButton';

interface MemberManagementRowProps {
  id: number;
  type: '대기' | '승인' | '거부';
  email: string;
  phone: string;
}

const MemberManagementRow = ({ id, type, email, phone }: MemberManagementRowProps) => {
  const MANAGEMENT_TYPE = ['대기', '승인', '거부'] as const;
  return (
    <div className="w-full h-112 flex items-center border-b-[3px] border-gray">
      <div className="flex flex-col flex-center gap-4 ml-8 mr-124">
        <span className="text-white text-14 font-700">UID</span>
        <MemberManagementChip value={id} type={type} size="small" />
        <span className="text-white text-14 font-700">{type}</span>
      </div>
      <div className="flex flex-col gap-20 w-full">
        <p className="flex items-center gap-16 text-20 font-700">
          <span className="w-80 text-start text-white">이메일</span>
          <span className="text-lightGray">{email}</span>
        </p>
        <p className="flex items-center gap-16 text-20 font-700">
          <span className="w-80 text-start text-white">전화번호</span>
          <span className="text-lightGray">{phone}</span>
        </p>
      </div>
      <div className="flex flex-center gap-16 ml-100">
        {MANAGEMENT_TYPE.map((type) => (
          <MemberManagementStateButton type={type} />
        ))}
        <TextButton text="관리" onClick={() => console.log()} px="px-28" isActive={true} />
      </div>
    </div>
  );
};

export default MemberManagementRow;
