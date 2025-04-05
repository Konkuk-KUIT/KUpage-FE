import { useState } from 'react';
import StaffCardRow from './StaffCardRow';
import STAFFS from '../../constants/StaffConstants';
import RoleChip from './RoleChip';
import { ROLE } from '../../constants/RoleConstants';

interface StaffContentProps {
  generation?: 5 | 4;
}

const StaffContent = ({ generation = 5 }: StaffContentProps) => {
  const [selectedPosition, setSelectedPosition] = useState<string>('운영팀');
  const positions = Object.values(ROLE);

  const filteredStaff = STAFFS[generation].filter((member) => member.position === selectedPosition);

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position);
  };

  return (
    <div className="flex-center flex-col w-full">
      <h2 className="text-white text-48 font-700">KUIT 5기 운영진</h2>
      <p className="text-white text-24 font-500">카드를 클릭해 뒷면을 확인해보세요!</p>
      <div className="mt-44 flex-center gap-16">
        {positions.map((position) => (
          <RoleChip
            key={position}
            role={position}
            isSelected={selectedPosition === position}
            onClick={() => handlePositionChange(position)}
          />
        ))}
      </div>

      <StaffCardRow staffs={filteredStaff} />
    </div>
  );
};

export default StaffContent;
