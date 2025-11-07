const TeamCard = () => {
  return (
    <div className="group w-full flex flex-col p-[29px] items-start justify-between text-left rounded-8 border-[2px] border-border cursor-pointer bg-gray hover:bg-main hover:border-main transition-all duration-200">
      <div className="w-full flex flex-col gap-[5px]">
        <div className="text-32 font-600 group-hover:text-darkblue">abc</div>
        <div className="text-24 font-700 group-hover:text-darkblue">abc</div>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="flex items-center justify-center group-hover:text-darkblue">abc</div>
        <div className="flex items-center justify-center text-20 font-700 h-48 px-[23px] rounded-24 border-[2px] group-hover:text-darkblue group-hover:border-darkblue">
          Android
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
