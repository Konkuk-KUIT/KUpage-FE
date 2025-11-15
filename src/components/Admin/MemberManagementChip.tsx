import React from 'react';
import { MemberManagementType } from '../../constants/MemberManagementConstants';

interface MemberManagementChipProps {
  size?: 'medium' | 'small';
  type: MemberManagementType;
  value: number;
}

const sizeClass = {
  medium: 'w-44 h-40',
  small: 'w-36 h-32',
} as const;

const typeClass = {
  대기: 'bg-lightGray',
  승인: 'bg-main',
  거부: 'bg-[#FF5252]',
} as const;

const MemberManagementChip = ({ size = 'medium', type, value }: MemberManagementChipProps) => {
  return (
    <div
      className={`flex flex-center rounded-[3px] text-gray text-20 font-700 ${sizeClass[size]} ${typeClass[type]}`}
    >
      {value}
    </div>
  );
};

export default MemberManagementChip;
