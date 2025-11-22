export interface TeamInfo {
  teamId: number;
  serviceName: string;
  appType: string;
  topicSummary: string;
  imageUrl: string;
  serviceIntroFile: string;
  featureRequirements: string;
  preferredDeveloper: string;
}

export interface TeamsResponse {
  teams: TeamInfo[];
}
