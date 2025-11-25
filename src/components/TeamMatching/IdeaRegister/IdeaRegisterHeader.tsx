import { useFormContext } from 'react-hook-form';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { IdeaRegisterSchema } from './schema/ideaRegisterSchema';
import useIdeaRegister from '../../../hooks/useIdeaRegister';
import { toast } from 'react-toastify';
import Toast from '../../commons/Toast';
import { useNavigate } from 'react-router-dom';

const IdeaRegisterHeader = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<IdeaRegisterSchema>();
  const navigate = useNavigate();
  const ideaRegister = useIdeaRegister();

  const onSubmit = handleSubmit(
    (data) => {
      ideaRegister(data).then(() => {
        toast(<Toast message="아이디어 등록이 완료되었어요." />, {
          onClose: () => navigate('/team-matching'),
        });
      });
    },
    (errors) => console.log('❌ 유효성 에러:', errors)
  );

  return (
    <div className="w-full h-[207px] flex flex-row justify-between items-center bg-darkblue sticky top-0 z-[999]">
      <h1 className="text-[32px] md:text-[64px] font-700">아이디어 등록하기</h1>
      <RoundedSquareButton disabled={isSubmitting} onClick={onSubmit}>
        완료하기
      </RoundedSquareButton>
    </div>
  );
};

export default IdeaRegisterHeader;
