import ChevronLeft from '../../../assets/imgs/ChevronLeft.svg?react';
import { useNavigate } from 'react-router-dom';
import { APPLY_VIEW, ApplyView } from '../../../types/applyStateTypes';
import { Dispatch, SetStateAction } from 'react';

interface Prop {
  viewType: ApplyView;
  setViewType: Dispatch<SetStateAction<ApplyView>>;
}

const ApplyStateHeader = ({ viewType, setViewType }: Prop) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (viewType === APPLY_VIEW.List) {
      navigate(-1);
      return;
    }
    setViewType(APPLY_VIEW.List);
  };

  return (
    <div className="flex flex-col justify-end gap-36 w-full h-372 p-48 bg-darkblue text-left">
      <ChevronLeft
        width={'27px'}
        height={'30px'}
        className="cursor-pointer"
        onClick={clickHandler}
      />
      <h1 className="text-64 font-700">지원 현황</h1>
      <h3 className="text-32 font-600">
        아이디어에 지원한 부원들의 포트폴리오 및 지원 동기를 확인해보세요!
      </h3>
    </div>
  );
};

export default ApplyStateHeader;
