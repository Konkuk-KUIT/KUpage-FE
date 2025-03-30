import { useState } from 'react';
import SpaceBtn from '../../assets/imgs/Spacebtn.svg';
import CloseBtn from '../../assets/imgs/CloseBtn.svg';
import PlusBtn from '../../assets/imgs/PlusBtn.svg';
import BlackIconBtn from './BlackIconBtn';
import { CONTACTS } from '../../constants/ContactConstants';

const SNSInquiryBtn = () => {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);

  const handleToggle = (type: string, link: string) => {
    if (activeType === type) {
      // 같은 버튼 두 번째 클릭 시 링크 이동
      window.location.href = link;
    } else {
      setActiveType(type); // 새로운 버튼 열기
    }
  };

  return (
    <div className="fixed bottom-132 right-40 flex flex-col items-end gap-24">
      <img src={SpaceBtn} alt="spacebtn" />

      {open && (
        <div className="flex flex-col items-end gap-24">
          {CONTACTS.map(({ type, label, icon, link }) => (
            <BlackIconBtn
              key={type}
              src={icon}
              label={label}
              href={link}
              isActive={activeType === type}
              onToggle={() => handleToggle(type, link)}
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
