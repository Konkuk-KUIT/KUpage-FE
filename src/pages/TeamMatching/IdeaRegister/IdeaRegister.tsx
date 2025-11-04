import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import IdeaRegisterBody from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterBody';
import IdeaRegisterHeader from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterHeader';
import {
  ideaRegisterSchema,
  IdeaRegisterSchema,
} from '../../../components/TeamMatching/IdeaRegister/schema/ideaRegisterSchema';

const IdeaRegister = () => {
  const methods = useForm<IdeaRegisterSchema>({
    resolver: zodResolver(ideaRegisterSchema),
    defaultValues: {
      name: '',
      description: '',
      appType: [],
      mainImg: null,
      pdfFile: null,
      coreFunc: '',
      developerDesc: '',
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: IdeaRegisterSchema) => {
    console.log('✅ 제출 성공:', data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min-h-screen flex flex-col justify-start p-[46px] bg-darkblue"
      >
        <IdeaRegisterHeader onSubmit={onSubmit} />
        <IdeaRegisterBody />
      </form>
    </FormProvider>
  );
};

export default IdeaRegister;
