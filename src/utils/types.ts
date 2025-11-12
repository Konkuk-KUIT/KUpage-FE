export interface SignupForm {
  name: string;
  studentId: string;
  college: string;
  major: string;
  grade: string;
  github: string;
  email: string;
  phone: string;
  birth: string;
}

export type SignupFormKey = keyof SignupForm;

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
