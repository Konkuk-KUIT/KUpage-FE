import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import IdeaRegisterBody from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterBody';
import IdeaRegisterHeader from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterHeader';
import {
  ideaRegisterSchema,
  IdeaRegisterSchema,
} from '../../../components/TeamMatching/IdeaRegister/schema/ideaRegisterSchema';
import useIdeaRegister from '../../../hooks/useIdeaRegister';
import { IdeaRegisterInfo } from '../../../constants/IdeaRegister/IdeaRegitster';

const IdeaRegister = () => {
  const methods = useForm<IdeaRegisterSchema>({
    resolver: zodResolver(ideaRegisterSchema),
    defaultValues: {
      serviceName: '',
      topicSummary: '',
      appType: [],
      imageUrl: undefined,
      serviceIntroFile: undefined,
      featureRequirements: '',
      preferredDeveloper: '',
    },
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        className="w-full min-h-screen flex flex-col justify-start p-[46px] bg-darkblue"
      >
        <IdeaRegisterHeader />
        <IdeaRegisterBody />
      </form>
    </FormProvider>
  );
};

export default IdeaRegister;
