import ApplyProjectBody from '../../../components/TeamMatching/ApplyProject/ApplyProjectBody';
import ApplyProjectHeader from '../../../components/TeamMatching/ApplyProject/ApplyProjectHeader';

const ApplyProject = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start p-[46px] bg-darkblue">
      <ApplyProjectHeader />
      <ApplyProjectBody />
    </div>
  );
};

export default ApplyProject;
