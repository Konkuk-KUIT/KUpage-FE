import { Auth, AUTH } from '../constants/authName';
import { Part } from '../constants/ProjectApply/partType.constants';

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
export const partExtractor = (roles: string[]): Set<Part> => {
  const partSet = new Set<Part>();

  const isWeb = roles.some((role) => {
    const roleSplit = role.split(' ');
    return roleSplit.includes('Web');
  });

  const isNative = roles.some((role) => {
    const roleSplit = role.split(' ');
    return roleSplit.includes('Android');
  });

  const isServer = roles.some((role) => {
    const roleSplit = role.split(' ');
    return roleSplit.includes('Server');
  });

  if (isWeb) {
    partSet.add('Web_App');
  }
  if (isNative) {
    partSet.add('Native_App');
  }
  if (isServer) {
    partSet.add('Server');
  }

  return partSet;
};
