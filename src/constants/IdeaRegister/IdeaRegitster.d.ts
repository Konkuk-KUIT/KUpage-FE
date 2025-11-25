import { ApplicationTypeValue } from './applicationType.constants';

export interface IdeaRegisterInfo {
  serviceName: string;
  appType: ApplicationTypeValue;
  topicSummary: string;
  imageUrl: File | string;
  serviceIntroFile: File | string;
  featureRequirements: string;
  preferredDeveloper: string;
}
