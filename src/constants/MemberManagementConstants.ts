export type MemberManagementType = '대기' | '승인' | '거부';

export const MANAGEMENT_MENU_STATE: string[] = [
  '전체 신청 수',
  '신청 대기',
  '신청 승인',
  '신청 거부',
];

export const MANAGEMENT_DROPDOWN_STATE = {
  ALL: '전체',
  PENDING: '대기',
  APPROVE: '승인',
  REJECT: '거부',
} as const;

export const MANAGEMENT_TYPE: MemberManagementType[] = ['대기', '승인', '거부'];

export const MANAGEMENT_CHIP_TYPE_MAP: Record<string, MemberManagementType> = {
  '전체 신청 수': '승인',
  '신청 대기': '대기',
  '신청 승인': '승인',
  '신청 거부': '거부',
};
