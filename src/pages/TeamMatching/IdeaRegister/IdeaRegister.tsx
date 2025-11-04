import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import IdeaRegisterBody from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterBody';
import IdeaRegisterHeader from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterHeader';
import {
  ideaRegisterSchema,
  IdeaRegisterSchema,
} from '../../../components/TeamMatching/IdeaRegister/schema/ideaRegisterSchema';
import { useEffect } from 'react';

const IdeaRegister = () => {
  const methods = useForm<IdeaRegisterSchema>({
    resolver: zodResolver(ideaRegisterSchema),
    defaultValues: {
      name: '',
      description: '',
      appType: [],
      mainImg: undefined,
      pdfFile: undefined,
      coreFunc: '',
      developerDesc: '',
    },
    mode: 'onSubmit',
    shouldFocusError: false,
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: IdeaRegisterSchema) => {
    console.log('✅ 제출 성공:', data);
  };
  const onError = (errors: any) => {
    console.log('❌ 유효성 에러:', errors);
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full min-h-screen flex flex-col justify-start p-[46px] bg-darkblue"
      >
        <IdeaRegisterHeader />
        <IdeaRegisterBody />
      </form>
    </FormProvider>
  );
};

export default IdeaRegister;
