interface RecruitDescriptionBlockProps {
  title: string;
  content: string | React.ReactNode;
  isBig: boolean;
}

const RecruitDescriptionBlock = ({ title, content, isBig }: RecruitDescriptionBlockProps) => {
  return (
    <div className="flex-center flex-col text-white gap-16">
      <h3 className="text-32 font-700">{title}</h3>
      <div
        className={`flex-center border rounded-10 border-border bg-gray text-24 font-500 ${
          isBig ? 'w-396 h-240' : 'w-440 h-172'
        } font-medium whitespace-pre-line`}
      >
        {content}
      </div>
    </div>
  );
};

export default RecruitDescriptionBlock;
