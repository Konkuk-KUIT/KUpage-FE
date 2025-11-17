import IdeaRegisterBody from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterBody';
import IdeaRegisterHeader from '../../../components/TeamMatching/IdeaRegister/IdeaRegisterHeader';

const IdeaRegister = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start p-[46px] bg-darkblue">
      <IdeaRegisterHeader />
      <IdeaRegisterBody />
    </div>
  );
};

export default IdeaRegister;
