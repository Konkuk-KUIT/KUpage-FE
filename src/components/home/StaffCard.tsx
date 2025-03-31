import { useState } from 'react';
import { StaffMember } from '../../constants/StaffConstants';
import StaffCardFront from './StaffCardFront';
import StaffCardBack from './StaffCardBack';

interface StaffCardProps {
  member: StaffMember;
}

const StaffCard = ({ member }: StaffCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-228 h-312 cursor-pointer [perspective:1000px]" onClick={handleClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <StaffCardFront member={member} />
        <StaffCardBack member={member} />
      </div>
    </div>
  );
};

export default StaffCard;
