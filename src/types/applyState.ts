// 지원 현황

export interface ApplyStateResponse {
  teamId: number;
  serviceName: string;
  nameAndPart?: string;
  part?: string;
  topicSummary: string;
  androidApplicantNum?: number;
  iosApplicantNum?: number;
  webApplicantNum?: number;
  serverApplicantNum?: number;
  designApplicantNum?: number;
}

// 지원자 현황
export const applicantPart = ['Android', 'iOS', 'Web', 'Server', 'Design'] as const;

export type ApplicantPart = (typeof applicantPart)[number];

export interface ApplicantDetail {
  portfolioUrl: string;
  additionalAnswer1: string;
  additionalAnswer2: string;
}

export interface Applicant {
  applicantMemberNameAndPart: string;
  part: ApplicantPart;
  appliedTime: string;
  applicantDetail: ApplicantDetail;
}

export type ApplicantListMap = {
  [key in ApplicantPart]: Applicant[];
};

export interface ApplicantMap {
  applicants: ApplicantListMap;
}

export interface ApplicantStateResponse {
  teamId: number;
  serviceName: string;
  nameAndPart: string;
  appType: ApplicantPart;
  topicSummary: string;
  mvpFeatures: string;
  applicantMap: ApplicantMap;
}
