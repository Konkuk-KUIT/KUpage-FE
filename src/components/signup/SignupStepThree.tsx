import { useEffect, useState } from 'react';

import Calendar from '../../components/signup/Calendar';
import SignupInputBox from '../../components/signup/SignupInputBox';
import { SignupForm } from '../../utils/types';
import { isValidEmail, isValidPhone } from '../../utils/validation';

interface SignupStepThreeProps {
  form: Pick<SignupForm, 'github' | 'email' | 'phone' | 'birth'>;
  updateForm: (field: keyof SignupForm, value: string) => void;
}

const SignupStepThree = ({ form, updateForm }: SignupStepThreeProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    form.birth ? new Date(form.birth) : null
  );

  useEffect(() => {
    if (selectedDate) {
      const formatted = selectedDate.toISOString().split('T')[0];
      updateForm('birth', formatted);
    }
  }, [selectedDate]);

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
          placeholder="010-1234-5678"
          isError={form.phone !== '' && !isValidPhone(form.phone)}
          errorText="* 휴대폰 번호는 010-1234-5678 형식으로 입력해주세요.)"
        />
      </div>

      <div className="w-[calc(50%-12px)]">
        <Calendar label="생년월일" selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
    </div>
  );
};

export default SignupStepThree;
