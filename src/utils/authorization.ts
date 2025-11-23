export const teamMatchingAuthExtractor = (roles: string[]): string => {
  const parsedRolesArr = roles.map((role) => {
    return role.split(' ')[roles.length - 1];
  });

  const parsedPartArr = roles
    .filter((role) => role.split(' ').length === 3)
    .map((role) => {
      return role.split(' ')[1];
    });

  if (
    parsedRolesArr.includes('회장') ||
    parsedRolesArr.includes('부회장') ||
    parsedRolesArr.includes('파트장') ||
    parsedRolesArr.includes('총무')
  ) {
    return 'admin';
  } else if (parsedPartArr.includes('PM')) {
    return 'pm';
  } else {
    return 'general';
  }
};
