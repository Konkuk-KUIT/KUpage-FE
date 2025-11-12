import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClick, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.37)]"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-40 items-end w-808 h-auto px-52 py-40 rounded-20 z-10 bg-[linear-gradient(180deg,_#17222C_0%,_#203536_100%)]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="flex justify-center items-center w-140 h-72 rounded-10 bg-main"
          onClick={onClick}
        >
          <span className="text-[#1F3335] text-24 font-700">완료하기</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
