import TextBadge from '../../commons/TextBadge';

const ApplyStateCard = () => {
  return (
    <div className="w-full h-200 flex flex-row border-2 border-solid rounded-10 border-border">
      <div className="w-[50%] flex flex-col gap-12 px-28 py-24 bg-gray rounded-l-10 text-left">
        <h2 className="text-32 font-600">Chat Diary</h2>
        <h3 className="text-24 font-700">아아아아아</h3>
        <div className="flex flex-row items-center justify-between">
          <span className="text-24 font-500">skdlnsdf</span>
          <TextBadge text={'Android'} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ApplyStateCard;
