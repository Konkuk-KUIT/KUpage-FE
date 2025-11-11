import { Pencil, X } from 'lucide-react';
export interface ArticleCardProps {
  title: string;
  userName: string;
  createdAt: string;
  isEdit?: boolean;
  /**
   * isEdit이 true일때만 동작
   */
  onEdit?: () => void;
  /**
   * isEdit이 true일때만 동작
   */
  onDelete?: () => void;
}

const ArticleCard = ({
  title,
  userName,
  createdAt,
  isEdit,
  onEdit,
  onDelete,
}: ArticleCardProps) => {
  const articleDate = new Date(createdAt);
  const year = articleDate.getFullYear();
  const month = String(articleDate.getMonth() + 1).padStart(2, '0');
  const date = String(articleDate.getMonth() + 1).padStart(2, '0');

  const dateStr = `${year}. ${month}. ${date}`;
  return (
    <div className="flex flex-col gap-20 w-75 h-auto">
      <div className="relative w-75 h-50">
        <img
          className="rounded-10 w-full h-full"
          alt={title}
          src="https://placehold.co/300x200/grey/grey"
        />
        {isEdit && (
          <div className="absolute top-20 right-[18px] flex gap-[10px]">
            <button
              name="edit"
              onClick={onEdit}
              className="p-4 flex-center hover:opacity-80 transition-opacity"
            >
              <Pencil size={20} color="#fff" strokeWidth={2} />
            </button>
            <button
              name="delete"
              onClick={onDelete}
              className="p-4 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <X size={20} color="#fff" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 items-start">
        <span className="text-14 font-300 text-white">{userName}</span>
        <span className="text-16 font-700 text-white text-start">{title}</span>
        <span className="text-14 font-500 text-white">{dateStr}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
