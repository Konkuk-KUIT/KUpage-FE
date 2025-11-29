import { useState } from 'react';
import MemberManagementChip from '../../components/Admin/MemberManagementChip';
import MemberManagementRow from '../../components/Admin/MemberManagementRow';
import MemberManagementSearch from '../../components/Admin/MemberManagementSearch';
import {
  MANAGEMENT_CHIP_TYPE_MAP,
  MANAGEMENT_DROPDOWN_STATE,
  MANAGEMENT_MENU_STATE,
  MemberManagementType,
} from '../../constants/MemberManagementConstants';
import Dropdown from '../../components/commons/DropDown';

const MemberManagement = () => {
  const [currentState, setCurrentState] = useState<string>(MANAGEMENT_DROPDOWN_STATE.ALL);
  const getChipType = (state: string): MemberManagementType => MANAGEMENT_CHIP_TYPE_MAP[state];

  return (
    <div className="w-full min-h-screen pt-104 pl-68 pr-60 pb-32 bg-signup-gradient">
      <h1 className="w-full text-start text-white text-64 font-700 mb-52">인원 관리</h1>
      <div className="flex items-center w-full h-68 gap-20 mb-80">
        {MANAGEMENT_MENU_STATE.map((state) => (
          <div
            key={state}
            className="flex justify-between items-center w-full h-full px-16 rounded-[6px] border-2 border-border bg-gray"
          >
            <span className="text-white text-20 font-700">{state}</span>
            <MemberManagementChip type={getChipType(state)} value={32} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center">
        <Dropdown
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
            key={member.id}
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
