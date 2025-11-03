import { useFormContext } from 'react-hook-form';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { IdeaRegisterSchema } from './schema/ideaRegisterSchema';

interface Props {
  onSubmit: (data: IdeaRegisterSchema) => void;
}

const IdeaRegisterHeader = ({ onSubmit }: Props) => {
  const { handleSubmit } = useFormContext<IdeaRegisterSchema>();

  return (
    <div className="w-full h-[207px] flex flex-row justify-between items-center">
      <h1 className="text-[32px] md:text-[64px] font-700">아이디어 등록하기</h1>
      <RoundedSquareButton text={'완료하기'} onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default IdeaRegisterHeader;
