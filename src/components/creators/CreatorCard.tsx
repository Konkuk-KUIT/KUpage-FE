import { BASE_NAME } from '../../constants/BaseName';
import { CreatorInfo } from '../../constants/CreatorConstants';

const CreatorCard = ({ roles, name, position, email, imageUrl }: CreatorInfo) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-16 mb-4">
        {roles.map((role, idx) => (
          <span
            key={idx}
            className="px-24 py-8 rounded-full bg-gray border-2 border-solid border-border text-24 font-700 text-white whitespace-nowrap"
          >
            {role}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-24">
        {imageUrl ? (
          <img
            src={BASE_NAME + imageUrl}
            alt={name}
            className="size-156 rounded-10 bg-gray object-cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="size-156 rounded-10 bg-gray"
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
        <div className="flex flex-col gap-12 text-white text-start">
          <h3 className="text-32 font-700">{name}</h3>
          <p className="text-24 font-500">{position}</p>
          <p className="px-24 py-8 rounded-full bg-gray border-2 border-solid border-border text-20 font-500">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
