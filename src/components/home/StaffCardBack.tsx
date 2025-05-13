import { StaffMember } from '../../constants/StaffConstants';
import Github from '../../assets/imgs/Github.svg';

interface StaffCardBackProps {
  member: StaffMember;
}

const StaffCardBack = ({ member }: StaffCardBackProps) => {
  return (
    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-10 overflow-hidden border border-border bg-white shadow-lg flex flex-col">
      <div className="flex justify-end p-20">
        <h3 className="text-16 font-700 text-black">{member.name}</h3>
      </div>
      <hr className="w-full h-[1px] bg-border"></hr>
      <div className="flex-grow overflow-y-auto p-12 relative text-start">
        <pre className="text-14 text-black whitespace-pre-wrap">
          {member.description || '잘 부탁드립니다!'}
        </pre>
        <div className="absolute bottom-20 right-20 flex items-center gap-4">
          {member.siteLink && (
            <a
              href={member.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal Website"
            >
              <img src={Github} className="size-36" />
            </a>
          )}
          {member.githubLink && (
            <a
              href={member.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src={Github} className="size-36" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffCardBack;
