import React from 'react';
import TeamCard from './TeamCard';

const TeamMatchingBody = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-row">
      <div
        className="w-[40%] h-full p-[47px]"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <TeamCard />
      </div>
      <div className="w-[60%] h-full p-[47px]"></div>
    </div>
  );
};

export default TeamMatchingBody;
