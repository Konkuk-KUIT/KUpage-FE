import { useState } from 'react';
import TextButton from '../../components/commons/TextButton';
import SignupHeader from '../../components/signup/SignupHeader';
import SignupInputBox from '../../components/signup/SignupInputBox';
import SignupSelectBox from '../../components/signup/SignupSelectBox';
import { COLLEGE_OPTIONS, GRADE_OPTIONS } from '../../constants/signupOptions';
import DatePickerInput from '../../components/signup/DatePickerInput';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    studentId: '',
    college: '',
    major: '',
    grade: '',
    github: '',
    email: '',
    phone: '',
    birth: '',
    generation: '',
    part: '',
    role: '',
  });

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const getTitleByStep = (step: number) => {
    switch (step) {
      case 1:
        return '이름을 입력해주세요.';
      case 2:
      case 3:
        return '정보를 입력해주세요.';
      default:
        return '';
    }
  };

  const getMajorOptions = () => {
    return COLLEGE_OPTIONS[form.college] || [];
  };

  return (
    <div className="flex flex-col relative items-center bg-signup-gradient min-h-screen w-screen p-120">
      <div className="w-[70%]">
        <SignupHeader nowStep={step} title={getTitleByStep(step)} onClick={prevStep} />
      </div>

      <div className="w-[70%] flex flex-col gap-24 mt-20 ">
        {step === 1 && (
          <div className="ml-80 mr-40">
            <SignupInputBox
              label="이름"
              value={form.name}
              onChange={(v) => updateForm('name', v)}
              placeholder="ex) 홍길동"
            />
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-wrap gap-24">
            <div className="w-[calc(50%-12px)]">
              <SignupInputBox
                label="학번"
                value={form.studentId}
                onChange={(v) => updateForm('studentId', v)}
                placeholder="ex) 20231234"
              />
            </div>
            <div className="w-[calc(50%-12px)]">
              <SignupSelectBox
                label="학년"
                value={form.grade}
                onChange={(v) => updateForm('grade', v)}
                options={GRADE_OPTIONS}
              ></SignupSelectBox>
            </div>
            <div className="w-[calc(50%-12px)]">
              <SignupSelectBox
                label="단과대학"
                value={form.college}
                onChange={(v) => {
                  updateForm('college', v);
                }}
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
        )}

        {step === 3 && (
          <>
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
                />
              </div>
              <div className="w-[calc(50%-12px)]">
                <SignupInputBox
                  label="전화번호"
                  value={form.phone}
                  onChange={(v) => updateForm('phone', v)}
                  placeholder="010-1234-5678"
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
          </>
        )}
      </div>
      <div className="w-[70%] absolute bottom-[10%] right-[-10%]">
        <TextButton text={step == 3 ? '완료하기' : '다음으로'} onClick={nextStep} />
      </div>
    </div>
  );
};

export default Signup;
