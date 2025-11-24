import { useQuery } from '@tanstack/react-query';
import useTeamMatching from '../../hooks/useTeamMatching';
import TeamCard from './TeamCard';
import TeamMatchingDetailContainer from './TeamMatchingDetailContainer';
import { useEffect, useState } from 'react';

const TeamMatchingBody = () => {
  const getTeamDatas = useTeamMatching();
  const {
    isEnabled,
    isError,
    isLoading,
    data: teamData,
  } = useQuery({
    queryKey: ['team-datas'],
    queryFn: () => getTeamDatas(),
  });
  const [selectedTeamId, setSelectedTeamId] = useState<number | undefined>();

  useEffect(() => {
    if (teamData?.success) {
      setSelectedTeamId(teamData.result.teams[0].teamId);
    }
  }, [teamData]);

  const selectedData = teamData?.result?.teams.find((data) => data.teamId === selectedTeamId);

  const cardClickHandler = (teamId: number) => {
    setSelectedTeamId(teamId);
  };

  if (isError) {
    return (
      <div className="w-full h-full mt-8 flex flex-row">
        <div className="w-full text-center text-24 font-400 p-92">데이터를 불러올 수 없습니다</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-8 flex flex-row">
      {isEnabled && teamData && teamData.success && (
        <>
          <div
            className="w-[40%] flex-1 p-[47px] flex flex-col gap-28"
            style={{
              background:
                'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
            }}
          >
            {teamData.result.teams.map((team) => {
              return (
                <TeamCard
                  key={team.teamId}
                  data={team}
                  selectedTeamId={selectedTeamId}
                  onClick={() => cardClickHandler(team.teamId)}
                />
              );
            })}
          </div>
          <div className="w-[60%] h-full p-[47px]">
            {selectedData && <TeamMatchingDetailContainer projectData={selectedData} />}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatchingBody;
