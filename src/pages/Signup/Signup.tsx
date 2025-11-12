import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextButton from '../../components/commons/TextButton';
import SignupHeader from '../../components/signup/SignupHeader';
import SignupStepOne from '../../components/signup/SignupStepOne';
import SignupStepThree from '../../components/signup/SignupStepThree';
import SignupStepTwo from '../../components/signup/SignupStepTwo';
import { COLLEGE_OPTIONS } from '../../constants/signupOptions';
import useSignup from '../../hooks/useSignup';
import { SignupFormKey } from '../../utils/types';
import { isValidEmail, isValidPhone, isValidStudentId } from '../../utils/validation';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useSignup();
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
  });

  const updateForm = (field: SignupFormKey, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = async () => {
    if (step === 3) {
      try {
        await signup(form);
        navigate('/');
      } catch (err) {
        console.error('회원가입 실패:', err);
        alert('회원가입 중 문제가 발생했습니다.');
      }
    } else {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isButtonActive = () => {
    if (step === 1) return !!form.name.trim();
    if (step === 2)
      return (
        !!form.studentId.trim() &&
        !!form.grade &&
        !!form.college &&
        !!form.major &&
        isValidStudentId(form.studentId)
      );
    if (step === 3)
      return isValidEmail(form.email) && isValidPhone(form.phone) && !!form.birth.trim();
    return true;
  };

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

  useEffect(() => {
    const majors = COLLEGE_OPTIONS[form.college] || [];
    if (!majors.includes(form.major)) {
      updateForm('major', majors[0] || '');
    }
  }, [form.college]);

  return (
    <div className="flex flex-col relative items-center bg-signup-gradient min-h-screen w-screen p-120">
      <div className="w-[70%]">
        <SignupHeader nowStep={step} title={getTitleByStep(step)} onClick={prevStep} />
      </div>
      <div className="w-[70%] flex flex-col gap-24 mt-20 ">
        {step === 1 && <SignupStepOne name={form.name} onChange={(v) => updateForm('name', v)} />}
        {step === 2 && <SignupStepTwo form={form} updateForm={updateForm} />}
        {step === 3 && <SignupStepThree form={form} updateForm={updateForm} />}
      </div>
      <div className="w-[70%] flex justify-end right-[23%] absolute bottom-[10%]">
        <TextButton
          text={step == 3 ? '완료하기' : '다음으로'}
          onClick={isButtonActive() ? nextStep : undefined}
          isActive={isButtonActive()}
        />
      </div>
    </div>
  );
};

export default Signup;
