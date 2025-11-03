export interface IFormValues {
  title: string;
  desc: string;
  link: string;
  cohort: string;
  appType: string[];
  appField: string[];
  teckStack: string[];
  imgUrl: string;
  member: string[];
  review: { name: string; content: string }[];
  pdfFile: string;
}
