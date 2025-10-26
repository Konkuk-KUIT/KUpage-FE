import TeamMatchingHeader from '../../components/TeamMatching/TeamMatchingHeader';
import TeamMatchingBody from '../../components/TeamMatching/TeamMatchingBody';

const TeamMatching = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <TeamMatchingHeader />
      <TeamMatchingBody />
    </div>
  );
};

export default TeamMatching;
