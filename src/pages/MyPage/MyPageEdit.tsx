import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import InputBox from '../../components/form/InputBox';
import SelectBox, { Option } from '../../components/form/SelectBox';

interface ProfileFormData {
  name: string;
  studentId: string;
  major: string;
  grade: string;
  githubId: string;
  email: string;
  phone: string;
  birthDate: string;
}

const MyPageEdit = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<ProfileFormData>({
    defaultValues: {
      name: '나윤상',
      studentId: '202012345',
      major: '컴퓨터공학과',
      grade: '3학년',
      githubId: '',
      email: 'example@konkuk.ac.kr',
      phone: '010-1234-5678',
      birthDate: '2000-01-01',
    },
  });

  const gradeOptions: Option[] = [
    { value: '1학년' },
    { value: '2학년' },
    { value: '3학년' },
    { value: '4학년' },
    { value: '5학년 이상' },
  ];

  const onSubmit = (data: ProfileFormData) => {
    // TODO: API 호출하여 프로필 저장
    console.log(data);
    navigate('/mypage');
  };

  return (
    <div className="relative">
      <div
        className="min-h-screen w-full px-40 py-60 flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%)',
        }}
      >
        <div className="mx-auto w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <div className="flex justify-end w-full pt-[105px] pb-[56px] pr-[61px]">
              <button
                type="submit"
                className="w-[139px] h-[71px] bg-gray border-border rounded-[10px] text-white font-700 text-[24px]"
              >
                저장하기
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-24 gap-y-32 max-w-[686px]">
              <div className="col-span-2">
                <InputBox label="이름" placeholder="이름을 입력하세요" {...register('name')} />
              </div>
              <InputBox label="학번" placeholder="학번을 입력하세요" {...register('studentId')} />
              <InputBox label="전공" placeholder="전공을 입력하세요" {...register('major')} />
              <SelectBox label="학년" options={gradeOptions} {...register('grade')} />
              <div></div>
              <InputBox
                label="GitHub ID"
                placeholder="GitHub ID를 입력하세요"
                {...register('githubId')}
              />
              <InputBox label="이메일" placeholder="이메일을 입력하세요" {...register('email')} />
              <InputBox
                label="전화번호"
                placeholder="전화번호를 입력하세요"
                {...register('phone')}
              />
              <InputBox label="생년월일" placeholder="YYYY-MM-DD" {...register('birthDate')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyPageEdit;
