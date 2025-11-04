import { ApplicationTypeValue } from './applicationType.constants';

export interface IdeaRegisterInfo {
  serviceName: string;
  appType: ApplicationTypeValue[];
  topicSummary: string;
  imageUrl: File;
  serviceIntroFile: File;
  featureRequirements: string;
  preferredDeveloper: string;
}
