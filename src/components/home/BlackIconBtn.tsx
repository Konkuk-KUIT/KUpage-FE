interface BlackIconBtnProps {
  src: string;
  label?: string;
  href: string;
  isActive: boolean;
  onToggle: () => void;
}

const BlackIconBtn = ({ src, label, isActive, onToggle }: BlackIconBtnProps) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center transition-all duration-300 ease-in-out h-92 bg-black rounded-full 
        ${isActive ? 'gap-20 px-28 py-20 w-280' : 'w-92 justify-center'}
        `}
    >
      <img src={src} alt="icon" className="size-52" />
      {isActive && (
        <span className="text-white text-24 font-700 whitespace-nowrap w-152 text-end">
          {label}
        </span>
      )}
    </button>
  );
};

export default BlackIconBtn;
