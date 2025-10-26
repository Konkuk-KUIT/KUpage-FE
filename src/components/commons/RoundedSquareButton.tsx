const RoundedSquareButton = ({ text }: { text: string }) => {
  return (
    <button
      className="px-[45px] py-[20px] rounded-[10px] border border-solid border-border 
        hover:bg-main text-white hover:text-[#18242D]"
    >
      <span className="text-24 font-700">{text}</span>
    </button>
  );
};

export default RoundedSquareButton;
