import ApplyStateHeader from '../../../components/TeamMatching/ApplyState/ApplyStateHeader';
import ApplyStateCard from '../../../components/TeamMatching/ApplyState/ApplyStateCard';

const ApplyState = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gray">
      <ApplyStateHeader />
      <div className="flex-1 mt-8 p-48 bg-darkblue">
        <ApplyStateCard />
      </div>
    </div>
  );
};

export default ApplyState;
