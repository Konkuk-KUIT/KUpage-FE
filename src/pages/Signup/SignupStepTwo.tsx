import SignupInputBox from '../../components/signup/SignupInputBox';
import SignupSelectBox from '../../components/signup/SignupSelectBox';
import { COLLEGE_OPTIONS, GRADE_OPTIONS } from '../../constants/signupOptions';
import { SignupForm } from '../../utils/types';

interface SignupStepTwoProps {
  form: Pick<SignupForm, 'studentId' | 'grade' | 'college' | 'major'>;
  updateForm: (field: keyof SignupForm, value: string) => void;
}

const SignupStepTwo = ({ form, updateForm }: SignupStepTwoProps) => {
  const getMajorOptions = () => COLLEGE_OPTIONS[form.college] || [];

  return (
    <div className="flex flex-wrap gap-24">
      <div className="w-[calc(50%-12px)]">
        <SignupInputBox
          label="학번"
          value={form.studentId}
          onChange={(v) => updateForm('studentId', v)}
          placeholder="ex) 20231234"
          isError={form.studentId !== '' && !/^\d{9}$/.test(form.studentId)}
          errorText="* 9자리 숫자로 입력해주세요"
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <SignupSelectBox
          label="학년"
          value={form.grade}
          onChange={(v) => updateForm('grade', v)}
          options={GRADE_OPTIONS}
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <SignupSelectBox
          label="단과대학"
          value={form.college}
          onChange={(v) => updateForm('college', v)}
          options={Object.keys(COLLEGE_OPTIONS)}
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <SignupSelectBox
          label="전공"
          value={form.major}
          onChange={(v) => updateForm('major', v)}
          options={getMajorOptions()}
        />
      </div>
    </div>
  );
};

export default SignupStepTwo;
