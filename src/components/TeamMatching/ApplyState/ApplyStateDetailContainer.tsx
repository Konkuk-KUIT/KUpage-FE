import { applicantPart } from '../../../types/applyState';
import ApplicantCard from './ApplicantCard';

const mockData = {
  teamId: 1,
  serviceName: '글로방',
  nameAndPart: '김지훈 - SIXTH PM',
  appType: 'Android',
  topicSummary: '외국인 대상 부동산 매칭 서비스',
  mvpFeatures: '지도 기반의 실시간 매물 탐색, 채팅 문의, 언어별 번역 기능 제공',
  applicantMap: {
    applicants: {
      Android: [
        {
          applicantMemberNameAndPart: '이서연 - SIXTH Android',
          part: 'Android',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/jwkim/Android-portfolio',
            additionalAnswer1: 'Android Studio로 앱을 개발한 경험이 있습니다.',
            additionalAnswer2: 'KUIT에서 모바일 개발을 심화하고 싶습니다.',
          },
        },
        {
          applicantMemberNameAndPart: '박민수 - SIXTH Android',
          part: 'Android',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/hwlee/Android-toy',
            additionalAnswer1: 'Kotlin과 Firebase를 활용한 프로젝트 경험이 있습니다.',
            additionalAnswer2: '실무 수준의 앱 아키텍처를 배우고 싶습니다.',
          },
        },
      ],
      Web: [
        {
          applicantMemberNameAndPart: '정하늘 - SIXTH Web',
          part: 'Web',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/mspark/web-portfolio',
            additionalAnswer1: 'React와 Next.js 기반 프로젝트 경험이 있습니다.',
            additionalAnswer2: '서버 연동 및 성능 최적화를 배우고 싶습니다.',
          },
        },
        {
          applicantMemberNameAndPart: '오세훈 - SIXTH Web',
          part: 'Web',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/yjjeong/web-demo',
            additionalAnswer1: 'TypeScript와 Zustand를 이용한 상태 관리 경험이 있습니다.',
            additionalAnswer2: '프론트엔드 구조 설계에 관심이 있습니다.',
          },
        },
      ],
      iOS: [
        {
          applicantMemberNameAndPart: '최유진 - SIXTH iOS',
          part: 'iOS',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/sylee/ios-portfolio',
            additionalAnswer1: 'UIKit, SwiftUI 모두 사용해봤습니다.',
            additionalAnswer2: '디자인 감각을 살린 iOS 앱을 만들고 싶습니다.',
          },
        },
      ],
      Server: [
        {
          applicantMemberNameAndPart: '한수민 - SIXTH Server',
          part: 'Server',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://github.com/haeun/server-portfolio',
            additionalAnswer1: 'Spring Boot, JPA 기반 REST API 개발 경험이 있습니다.',
            additionalAnswer2: '효율적인 데이터 모델링을 배우고 싶습니다.',
          },
        },
      ],
      Design: [
        {
          applicantMemberNameAndPart: '류지호 - SIXTH Design',
          part: 'Design',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://behance.net/mjchoi-design',
            additionalAnswer1: 'Figma와 Adobe XD를 활용한 UI/UX 디자인 경험이 있습니다.',
            additionalAnswer2: '사용자 중심의 디자인을 실천하고 싶습니다.',
          },
        },
        {
          applicantMemberNameAndPart: '서민재 - SIXTH Design',
          part: 'Design',
          appliedTime: '11/02 (일) 22:40',
          applicantDetail: {
            portfolioUrl: 'https://dribbble.com/sbhan',
            additionalAnswer1: '브랜딩과 인터랙션 디자인 프로젝트를 진행했습니다.',
            additionalAnswer2: '디자인 시스템을 구축하는 경험을 하고 싶습니다.',
          },
        },
      ],
    },
  },
};

const ApplyStateDetailContainer = () => {
  return (
    <div className="w-full flex-1 flex flex-col justify-start bg-darkblue">
      <div className="w-full h-auto flex flex-col items-start gap-24 px-56 py-36 bg-gray">
        <h2 className="text-32 font-600">{mockData.serviceName}</h2>
        <h3 className="text-24 font-700">{mockData.nameAndPart}</h3>
        <div className="flex items-center justify-center text-20 font-700 h-48 px-[23px] rounded-24 border-2 border-border">
          {mockData.appType}
        </div>
        <div className="w-full border-2 border-border rounded-10 px-24 py-28">
          {mockData.topicSummary}
        </div>
      </div>
      {/*  */}
      <div className="w-full px-56 py-48 flex flex-col gap-76">
        {applicantPart.map((part, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-16">
              <div className="text-48 font-600 text-left">{part}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
                {mockData.applicantMap.applicants[part]?.map((applicant) => {
                  return (
                    <ApplicantCard
                      nameAndPart={applicant.applicantMemberNameAndPart}
                      part={applicant.part}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplyStateDetailContainer;
