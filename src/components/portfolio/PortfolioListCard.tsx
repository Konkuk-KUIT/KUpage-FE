import TextChip from '../commons/TextChip';
import HeartIcon from '../../assets/imgs/Heart.svg';
import EyeIcon from '../../assets/imgs/Eye.svg';

interface PortfolioListCardProps {
  title: string;
  datetime: string; // "10/09 04:33" 와 같은 형식으로 받아옴
  tags: string[]; // ["#프로젝트", "#학력", "#연합동아리"]와 같은 형식으로 받아옴
  userInfo: string;
  roles: string[];
  likeCount: number;
  viewCount: number;
}

const PortfolioListCard = ({
  title,
  datetime,
  tags,
  userInfo,
  roles,
  likeCount,
  viewCount,
}: PortfolioListCardProps) => {
  return (
    <div className="w-full h-248 p-32  mx-auto border border-border rounded-10 bg-gray text-white flex flex-col justify-between">
      <section className="flex items-center justify-between mb-2">
        <p className="text-32 font-600 truncate">{title}</p>
        <span className="text-lightGray text-24 truncate">{datetime}</span>
      </section>

      <section>
        <div className="mb-12 flex">
          <span className="text-24 font-500">{tags.join(' ')}</span>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center gap-16">
            <span className="text-24 font-500 whitespace-nowrap ml-8">{userInfo}</span>
            {roles.map((role, index) => (
              <TextChip key={index} text={role} isSelected={false} onClick={() => {}} />
            ))}
          </div>

          <div className="flex flex-shrink-0 gap-44 px-32 h-60 rounded-full bg-[#17222C]">
            <div className="flex items-center gap-8">
              <img src={HeartIcon} />
              <span className="font-500 text-24">{likeCount}</span>
            </div>
            <div className="flex items-center gap-8">
              <img src={EyeIcon} />
              <span className="font-500 text-24">{viewCount}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioListCard;
