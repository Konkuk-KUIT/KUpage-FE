import { ApplicationTypeValue } from "../constants/IdeaRegister/applicationType.constants";

export interface TeamInfo {
  teamId: number;
  serviceName: string;
  ownerName: string;
  appType: ApplicationTypeValue;
  topicSummary: string;
  imageUrl: string;
  serviceIntroFile: string;
  featureRequirements: string;
  preferredDeveloper: string;
}

export interface TeamsResponse {
  teams: TeamInfo[];
  canApply: boolean;
}
