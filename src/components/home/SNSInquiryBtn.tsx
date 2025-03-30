import { useState } from 'react';
import SpaceBtn from '../../assets/imgs/Spacebtn.svg';
import Mail from '../../assets/imgs/Mail.svg';
import Instagram from '../../assets/imgs/Instagram.svg';
import KakaoTalk from '../../assets/imgs/KakaoTalk.svg';
import CloseBtn from '../../assets/imgs/CloseBtn.svg';
import PlusBtn from '../../assets/imgs/PlusBtn.svg';
import BlackIconBtn from './BlackIconBtn';

type ContactType = 'email' | 'instagram' | 'kakao';

const contactLabels: Record<ContactType, string> = {
  email: '이메일 문의',
  instagram: '인스타그램 문의',
  kakao: '카카오톡 문의',
};

const contactIcons: Record<ContactType, string> = {
  email: Mail,
  instagram: Instagram,
  kakao: KakaoTalk,
};

// TODO: email 링크 추후 변경
const contactLinks: Record<ContactType, string> = {
  email: 'https://www.konkuk-kuit.com/5/introduce',
  instagram: 'https://www.instagram.com/kuit.official/',
  kakao: 'http://pf.kakao.com/_Dxbgvxj',
};

const SNSInquiryBtn = () => {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState<ContactType | null>(null);

  const handleToggle = (type: ContactType) => {
    if (activeType === type) {
      // 같은 버튼 두 번째 클릭 시 링크 이동
      window.location.href = contactLinks[type];
    } else {
      setActiveType(type); // 새로운 버튼 열기
    }
  };

  return (
    <div className="fixed bottom-132 right-40 flex flex-col items-end gap-24">
      <img src={SpaceBtn} alt="spacebtn" />

      {open && (
        <div className="flex flex-col items-end gap-24">
          {(['email', 'instagram', 'kakao'] as ContactType[]).map((type) => (
            <BlackIconBtn
              key={type}
              src={contactIcons[type]}
              label={contactLabels[type]}
              href={contactLinks[type]}
              isActive={activeType === type}
              onToggle={() => handleToggle(type)}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => {
          setOpen(!open);
          setActiveType(null);
        }}
      >
        <img src={open ? CloseBtn : PlusBtn} alt="toggle" />
      </button>
    </div>
  );
};

export default SNSInquiryBtn;
