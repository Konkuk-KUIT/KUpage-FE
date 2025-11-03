import { FormProvider, useForm } from 'react-hook-form';
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
      appType: null,
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

function zodResolver(ideaRegisterSchema: any):
  | import('react-hook-form').Resolver<
      {
        name: string;
        description: string;
        appType: 'web' | 'android' | 'ios' | 'pc' | 'cross' | 'hybrid' | null;
        mainImg: any;
        pdfFile: any;
        coreFunc: string;
        developerDesc: string;
      },
      any,
      {
        name: string;
        description: string;
        appType: 'web' | 'android' | 'ios' | 'pc' | 'cross' | 'hybrid' | null;
        mainImg: any;
        pdfFile: any;
        coreFunc: string;
        developerDesc: string;
      }
    >
  | undefined {
  throw new Error('Function not implemented.');
}
