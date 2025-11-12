import { useFormContext } from 'react-hook-form';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { IdeaRegisterSchema } from './schema/ideaRegisterSchema';
import useIdeaRegister from '../../../hooks/useIdeaRegister';

const IdeaRegisterHeader = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<IdeaRegisterSchema>();
  const ideaRegister = useIdeaRegister();

  const onSubmit = handleSubmit(
    (data) => {
      console.log('✅ 제출 성공:', data);
      ideaRegister(data);
    },
    (errors) => console.log('❌ 유효성 에러:', errors)
  );

  return (
    <div className="w-full h-[207px] flex flex-row justify-between items-center">
      <h1 className="text-[32px] md:text-[64px] font-700">아이디어 등록하기</h1>
      <RoundedSquareButton disabled={isSubmitting} onClick={onSubmit}>
        완료하기
      </RoundedSquareButton>
    </div>
  );
};

export default IdeaRegisterHeader;
