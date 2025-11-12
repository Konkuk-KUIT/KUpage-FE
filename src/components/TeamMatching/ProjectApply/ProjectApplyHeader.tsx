// prettier-ignore
import { notificaion } from '../../../constants/ProjectApply/notification.constants';
import RoundedSquareButton from '../../commons/RoundedSquareButton';

const ProjectApplyHeader = () => {
  return (
    <div className="flex flex-col gap-36 p-48">
      <div className="flex flex-row justify-between items-center">
        <h1>Completion of application</h1>
        <RoundedSquareButton>최종 제출하기</RoundedSquareButton>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-[16px] leading-relaxed text-left">
        {notificaion}
      </pre>
    </div>
  );
};

export default ProjectApplyHeader;
