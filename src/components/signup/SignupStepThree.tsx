import SignupInputBox from '../../components/signup/SignupInputBox';
import DatePickerInput from '../../components/signup/DatePickerInput';
import { isValidEmail, isValidPhone } from '../../utils/validation';
import { SignupForm } from '../../utils/types';

interface SignupStepThreeProps {
  form: Pick<SignupForm, 'github' | 'email' | 'phone' | 'birth'>;
  updateForm: (field: keyof SignupForm, value: string) => void;
}

const SignupStepThree = ({ form, updateForm }: SignupStepThreeProps) => {
  return (
    <div className="flex flex-wrap gap-24">
      <div className="w-[calc(50%-12px)]">
        <SignupInputBox
          label="Github ID"
          value={form.github}
          onChange={(v) => updateForm('github', v)}
          placeholder="ex) username"
          helperText="*PM/Designer는 선택사항입니다."
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <SignupInputBox
          label="Email"
          value={form.email}
          onChange={(v) => updateForm('email', v)}
          placeholder="ex) example@email.com"
          isError={form.email !== '' && !isValidEmail(form.email)}
          errorText="* example@company.com 의 형식으로 입력해주세요."
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <SignupInputBox
          label="전화번호"
          value={form.phone}
          onChange={(v) => updateForm('phone', v)}
          placeholder="01012345678"
          isError={form.phone !== '' && !isValidPhone(form.phone)}
          errorText="* 휴대폰 번호는 -를 빼고 입력해 주세요. ex(01000000000)"
        />
      </div>
      <div className="w-[calc(50%-12px)]">
        <DatePickerInput
          label="생년월일"
          value={form.birth}
          onChange={(v) => updateForm('birth', v)}
        />
      </div>
    </div>
  );
};

export default SignupStepThree;
