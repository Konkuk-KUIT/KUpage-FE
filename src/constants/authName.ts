export const AUTH = {
  PRESIDENT: '회장',
  VICE_PRESIDENT: '부회장',
  PART_LEAD: '파트장',
  ACCOUNTANT: '총무',
} as const;

export type Auth = (typeof AUTH)[keyof typeof AUTH];
