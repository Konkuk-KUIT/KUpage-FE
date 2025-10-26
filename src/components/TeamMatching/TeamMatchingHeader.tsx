import React from 'react';

const TeamMatchingHeader = () => {
  return (
    <div className="w-full h-[300px] flex flex-row justify-start items-center p-[47px]">
      <div className="w-[70%] flex flex-col items-start gap-[10px]">
        <h1 className="font-bold text-[64px]">Team Matching</h1>
        <h3 className="font-[600] text-[32px] text-left">
          PM들의 프로젝트 아이디어를 살펴보고, 함께 하고싶은 프로젝트에 지원해보세요!
        </h3>
      </div>
      <div className="w-[30%]">버튼</div>
    </div>
  );
};

export default TeamMatchingHeader;
