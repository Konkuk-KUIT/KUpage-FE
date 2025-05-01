import { BASE_NAME } from '../../constants/BaseName';
import { StaffMember } from '../../constants/StaffConstants';

interface StaffCardBackProps {
  member: StaffMember;
}

// TODO: 뒷면 디자인 나오면 수정하기
const StaffCardBack = ({ member }: StaffCardBackProps) => {
  return (
    <div className="w-228 h-auto border-border border-[0.1rem] rounded-10 bg-border absolute [backface-visibility:hidden] [transform:rotateY(180deg)]">
      {member.imageUrl ? (
        <img
          src={BASE_NAME + member.imageUrl}
          alt={member.name}
          className="w-full object-cover rounded-t-10 h-224"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full bg-gray-200"
        >
          <path
            d="M100 60
                   a30 30 0 0 1 0 60
                   a30 30 0 0 1 0 -60
                   M60 180
                   C60 130 140 130 140 180"
            fill="#9e9e9e"
          />
        </svg>
      )}

      <div className="bg-gray  items-start text-white text-16 flex rounded-b-10 flex-col px-[1.4rem] py-16 gap-[0.6rem]">
        <h3 className="font-700">{member.name}</h3>
        <p className="font-500">{member.role}</p>
      </div>
    </div>
  );
};

export default StaffCardBack;
