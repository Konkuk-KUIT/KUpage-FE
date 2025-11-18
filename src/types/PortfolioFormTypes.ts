export type FormData = {
  shortDescription: string;
  part: string[];
  portfolioFile: File | null;
  portfolioLink: string;
  detailedDescription: string;
  tags: string[];
  visibility: 'public' | 'private' | null;
};
