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
