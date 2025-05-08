import { useState } from 'react';
import { ROLE } from '../../constants/RoleConstants';
import TextChip from '../commons/TextChip';

const RoleChipRow = () => {
  const [selectedRole, setSelectedRole] = useState<string>(ROLE.OPERATIONS_TEAM);

  return (
    <div className="mt-44 flex-center gap-16">
      {Object.values(ROLE).map((role) => (
        <TextChip
          key={role}
          text={role}
          isSelected={selectedRole === role}
          onClick={() => setSelectedRole(role)}
        />
      ))}
    </div>
  );
};

export default RoleChipRow;
