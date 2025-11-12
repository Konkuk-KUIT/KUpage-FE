import { useState } from 'react';
import LinkBtn from '../../assets/imgs/LinkBtn.svg';
import Modal from '../commons/Modal';

interface ProjectFormLinkProps {
  link: string;
  setLink: (value: string) => void;
}

const ProjectFormLink = ({ link, setLink }: ProjectFormLinkProps) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  return (
    <div>
      {link.length == 0 ? (
        <div
          className="w-full h-108 flex justify-center items-center rounded-[10px] bg-deepGray cursor-pointer"
          onClick={() => setIsLinkModalOpen(true)}
        >
          <img src={LinkBtn} alt="사진 추가 버튼" />
        </div>
      ) : (
        <button
          className="w-full h-104 rounded-10 border-3 border-solid border-deepGray bg-deepGray px-32 text-white text-32 font-500"
          onClick={() => setIsLinkModalOpen(true)}
        >
          {link}
        </button>
      )}
      <Modal
        isOpen={isLinkModalOpen}
        onClick={() => setIsLinkModalOpen(false)}
        onClose={() => setIsLinkModalOpen(false)}
      >
        <div className="w-full flex flex-col gap-28">
          <p className="w-full text-white text-36 font-700 text-start">URL을 입력해주세요.</p>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            className="w-full h-56 rounded-4 border-2 border-solid border-border bg-gray text-white text-20 font-500 px-16"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProjectFormLink;
