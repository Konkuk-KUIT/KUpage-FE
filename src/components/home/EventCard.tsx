interface EventCardProps {
  id: number;
  title: string;
  date?: string;
  description?: string;
  isSelected: boolean;
  shouldShrink?: boolean;
  onClick: (id: number) => void;
}

const EventCard = ({
  id,
  title,
  date,
  description,
  isSelected,
  shouldShrink = false,
  onClick,
}: EventCardProps) => {
  const baseClasses =
    'transition-all duration-1000 cursor-pointer rounded-10 h-252 shrink-0 overflow-hidden flex-col';
  const selectedClasses = 'bg-main w-684 text-gray px-36 py-40 gap-20 flex items-start';
  const shrunkClasses = 'bg-gray w-172 text-white flex-center';
  const defaultClasses = 'bg-gray w-300 text-white flex-center';

  return (
    <div
      onClick={() => onClick(id)}
      className={`${baseClasses} ${isSelected ? selectedClasses : shouldShrink ? shrunkClasses : defaultClasses}`}
    >
      {isSelected ? (
        <>
          <span className="text-20 font-600 leading-[3rem]">{date}</span>
          <h3 className="text-32 font-700 leading-[4rem]">{title}</h3>
          <p className="text-20 font-600 leading-[3rem] text-left">{description}</p>
        </>
      ) : (
        <h3 className="text-32 font-700">{title}</h3>
      )}
    </div>
  );
};

export default EventCard;
