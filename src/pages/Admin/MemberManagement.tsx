import { useState } from 'react';
import MemberManagementChip from '../../components/Admin/MemberManagementChip';
import ProjectCohortDropdown from '../../components/commons/DropDown';
import MemberManagementRow from '../../components/Admin/MemberManagementRow';
import MemberManagementSearch from '../../components/Admin/MemberManagementSearch';

const MemberManagement = () => {
  const MANAGEMENT_MENU_STATE = ['전체 신청 수', '신청 대기', '신청 승인 ', '신청 거부'];
  const MANAGEMENT_DROPDOWN_STATE = {
    ALL: '전체',
    PENDING: '대기',
    APPROVE: '승인',
    REJECT: '거부',
  };
  const getChipType = (state: string): '대기' | '승인' | '거부' => {
    switch (state) {
      case '전체 신청 수':
        return '승인';
      case '신청 대기':
        return '대기';
      case '신청 승인':
        return '승인';
      case '신청 거부':
        return '거부';
      default:
        return '승인';
    }
  };
  const [currentState, setCurrentState] = useState(MANAGEMENT_DROPDOWN_STATE.ALL);

  const dummyMembers = [
    {
      id: 1,
      type: '대기',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '승인',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '거부',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '대기',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '대기',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '승인',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
    {
      id: 1,
      type: '거부',
      email: 'rkddbwls07@gmail.com',
      phone: '010-1234-5678',
    },
  ] as const;

  return (
    <div className="w-full min-h-screen pt-104 pl-68 pr-60 pb-32 bg-signup-gradient">
      <h1 className="w-full text-start text-white text-64 font-700 mb-52">인원 관리</h1>
      <div className="flex items-center w-full h-68 gap-20 mb-80">
        {MANAGEMENT_MENU_STATE.map((state) => (
          <div className="flex justify-between items-center w-full h-full px-16 rounded-[6px] border-2 border-border bg-gray">
            <span className="text-white text-20 font-700">{state}</span>
            <MemberManagementChip type={getChipType(state)} value={32} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center">
        <ProjectCohortDropdown
          currentOption={currentState}
          setCurrentOption={setCurrentState}
          options={MANAGEMENT_DROPDOWN_STATE}
          textSize={20}
          fontWeight={700}
        />
        <MemberManagementSearch />
      </div>
      <div className="mt-24 border-t-[3px] border-gray">
        {dummyMembers.map((member) => (
          <MemberManagementRow
            id={member.id}
            type={member.type}
            email={member.email}
            phone={member.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberManagement;
