import CreatorCard from '../../components/creators/CreatorCard';
import SNSInquiryBtn from '../../components/home/SNSInquiryBtn';
import { CREATORS } from '../../constants/CreatorConstants';

const Creators = () => {
  // 파트별로 그룹화하기
  const groupedMembers = CREATORS.reduce(
    (acc, member) => {
      if (!acc[member.part]) acc[member.part] = [];
      acc[member.part].push(member);
      return acc;
    },
    {} as Record<string, typeof CREATORS>
  );

  return (
    <div className="relative">
      <div
        className="min-h-screen w-full flex flex-col pb-176"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <div className="flex flex-col gap-24 text-start ml-44 mt-56">
          <h1 className="text-80 font-700 text-main">
            KU <span className="text-white">CAN DO</span> IT
          </h1>
          <p className="text-24 font-500 text-white">
            KUIT 5기 웹페이지 제작자들은 KUIT의 운영진들로 구성되어 있습니다.
            <br /> KUIT의 네트워킹과 소통의 편리함을 제공하고 있으며,
            <br /> 서비스 운영의 인프라 구축을 위해 노력하고 있습니다.
          </p>
        </div>

        {/* 파트별 구성 */}
        {Object.keys(groupedMembers).map((part) => (
          <div key={part}>
            <hr className="h-8 w-full bg-gray my-44" />
            <div className="flex flex-col ml-44 gap-20">
              <h2 className="text-main text-40 font-700 text-start">{part}</h2>
              <div className="flex flex-wrap gap-72">
                {groupedMembers[part].map((member, index) => (
                  <CreatorCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    email={member.email}
                    imageUrl={member.imageUrl}
                    roles={member.roles}
                    part={member.part}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SNSInquiryBtn />
    </div>
  );
};

export default Creators;
