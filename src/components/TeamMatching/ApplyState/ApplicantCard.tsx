import TextBadge from '../../commons/TextBadge';

interface Props {
  nameAndPart: string;
  part: string;
}

const ApplicantCard = ({ nameAndPart, part }: Props) => {
  return (
    <div className="h-156 border-2 border-solid border-border bg-gray px-28 py-32 flex flex-col gap-12 rounded-10 text-left">
      <span className="text-24 font-500 whitespace-nowrap">{nameAndPart}</span>
      <TextBadge text={part} />
    </div>
  );
};

export default ApplicantCard;
