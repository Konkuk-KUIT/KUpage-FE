interface ProjectDetailCardProps {
  imgSrc: string;
  title: string;
  info: string;
  subInfo: string;
}

const ProjectDetailCard = ({ imgSrc, title, info, subInfo }: ProjectDetailCardProps) => {
  return (
    <div className="w-[331px] rounded-[10px] border-2 border-border">
      <img src={imgSrc} alt="title" className="w-full h-[132px] object-cover" />
      <div className="flex flex-col px-[18px] pt-[15px] pb-[10px] bg-grey">
        <span className="text-24 font-700 text-white pb-[8px] text-left">{title}</span>
        <span className="text-20 font-500 text-white pb-[13px] text-left">{info}</span>
        <span className="text-20 font-500 text-main text-left">{subInfo}</span>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
