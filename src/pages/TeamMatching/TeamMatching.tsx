import TeamMatchingHeader from '../../components/TeamMatching/TeamMatchingHeader';
import TeamMatchingBody from '../../components/TeamMatching/TeamMatchingBody';

const TeamMatching = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray">
      <TeamMatchingHeader />
      <TeamMatchingBody />
    </div>
  );
};

export default TeamMatching;
