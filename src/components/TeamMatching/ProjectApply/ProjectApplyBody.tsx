import { PART_TYPE } from '../../../constants/ProjectApply/partType.constants';
import ToggleButton from '../IdeaRegister/ToggleButton';
import AppTypeToggle from '../IdeaRegister/ToggleButton';

const ProjectApplyBody = () => {
  // TODO: Context API로 선택된 프로젝트 관련 정보 내려받기
  return (
    <div>
      <div className="w-full h-auto flex flex-col items-start gap-24 px-56 py-36 bg-gray">
        <h2 className="text-32 font-600">Chat Diary</h2>
        <h3 className="text-24 font-700">이현희 - 6th PM</h3>
        <div className="flex items-center justify-center text-20 font-700 h-48 px-[23px] rounded-24 border-2 border-border">
          Android
        </div>
        <div className="w-full border-2 border-border rounded-10 px-24 py-28">
          가장 쉬운 일기 습관, Chat Diary 많은 사람들이 일기 습관을 만드는 것을 어려워합니다.
          그렇다면 채팅으로 시작하는 건 어떨까요? 채팅으로 쓰는 일기, Chat Diary는 이미 있는 습관인
          채팅을 활용하여 일기를 작성할 수 있도록 합니다. 더 익숙하고, 편리한 방식으로 일기를 더욱
          쉽게 작성해보세요!
        </div>
      </div>
      <div>
        <span>파트를 선택해주세요</span>
        <div className="w-full flex flex-row gap-[10px]">
          {PART_TYPE.map((partType) => (
            <ToggleButton
              key={partType.id}
              name={partType.name}
              value={partType.value}
              field={'appliedPart'}
              limitNum={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectApplyBody;
