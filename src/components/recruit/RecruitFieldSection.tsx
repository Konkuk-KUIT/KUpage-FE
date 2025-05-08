import { useState } from 'react';
import TextChip from '../commons/TextChip';
import { RECRUIT_PART_INFO } from '../../constants/RecruitCostants';

const RecruitFieldCard = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="flex justify-between px-32 py-28 bg-gray border-border border-2 rounded-10 w-1116 text-start">
    <div className="text-32 font-700 whitespace-pre-line">{title}</div>
    <div className="text-24 font-500 text-start w-736 leading-[4rem]">{content}</div>
  </div>
);

const RecruitFieldSection = () => {
  const [selected, setSelected] = useState('Android');
  const current = RECRUIT_PART_INFO.find((f) => f.name === selected)!;

  return (
    <section>
      {/* 탭 버튼 */}
      <div className="flex justify-center gap-16 mb-28">
        {RECRUIT_PART_INFO.map((f) => (
          <TextChip
            key={f.name}
            text={f.name}
            isSelected={selected === f.name}
            onClick={() => setSelected(f.name)}
          />
        ))}
      </div>

      {/* 내용 */}
      <div className="flex flex-col gap-40 text-white">
        <RecruitFieldCard title={`${current.name} 파트는요!`} content={current.intro} />
        <RecruitFieldCard title="이런 개발자를 찾아요." content={current.lookingFor} />
        <RecruitFieldCard title={`이런 분들이라면\n더 좋아요.`} content={current.betterIf} />
      </div>
    </section>
  );
};

export default RecruitFieldSection;
