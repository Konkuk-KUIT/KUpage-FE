import { useState } from 'react';
import { ROLE } from '../../constants/RoleConstants';
import RoleChip from './RoleChip';

const RoleChipRow = () => {
  const [selectedRole, setSelectedRole] = useState<string>(ROLE.OPERATIONS_TEAM);

  return (
    <div className="mt-44 flex-center gap-16">
      {Object.values(ROLE).map((role) => (
        <RoleChip
          key={role}
          role={role}
          isSelected={selectedRole === role}
          onClick={() => setSelectedRole(role)}
        />
      ))}
    </div>
  );
};

export default RoleChipRow;
