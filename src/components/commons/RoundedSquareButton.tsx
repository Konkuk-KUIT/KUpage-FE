interface Props {
  children: React.ReactNode;
}

const RoundedSquareButton = ({ children }: Props) => {
  return (
    <button
      className="px-[45px] py-[20px] rounded-[10px] border border-solid border-border self-start
        hover:bg-main text-white hover:text-[#18242D] transition-all duration-200 text-24 font-700"
    >
      {children}
    </button>
  );
};

export default RoundedSquareButton;
