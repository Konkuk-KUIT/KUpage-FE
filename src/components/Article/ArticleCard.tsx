interface ArticleCardProps {
  title: string;
  userName: string;
  createdAt: string;
}

const ArticleCard = ({ title, userName, createdAt }: ArticleCardProps) => {
  const articleDate = new Date(createdAt);
  const year = articleDate.getFullYear();
  const month = String(articleDate.getMonth() + 1).padStart(2, '0');
  const date = String(articleDate.getMonth() + 1).padStart(2, '0');

  const dateStr = `${year}. ${month}. ${date}`;
  return (
    <div className="flex flex-col gap-20 w-75 h-auto">
      <img
        className="rounded-10 w-75 h-50"
        alt={title}
        src="https://placehold.co/300x200/grey/grey"
      />
      <div className="flex flex-col gap-8 items-start">
        <span className="text-14 font-300 text-white">{userName}</span>
        <span className="text-16 font-700 text-white text-start">{title}</span>
        <span className="text-14 font-500 text-white">{dateStr}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
