import { Auth, AUTH } from '../constants/authName';

export const teamMatchingAuthExtractor = (roles: string[]): string => {
  const adminKeywords = [AUTH.PRESIDENT, AUTH.VICE_PRESIDENT, AUTH.PART_LEAD, AUTH.ACCOUNTANT];

  const isAdmin = roles.some((role) => {
    const parts = role.split(' ');
    const last = parts[parts.length - 1];
    return adminKeywords.includes(last as Auth);
  });

  if (isAdmin) return 'admin';

  const isPm = roles.some((role) => {
    const parts = role.split(' ');
    return parts.length === 3 && parts[1] === 'PM';
  });

  if (isPm) return 'pm';

  return 'general';
};
