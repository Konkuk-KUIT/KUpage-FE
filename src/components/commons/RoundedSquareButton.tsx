const RoundedSquareButton = ({ text, disabled }: { text: string; disabled: boolean }) => {
  return (
    <button
      type="submit"
      className="px-[45px] py-[20px] rounded-[10px] border border-solid border-border 
        hover:bg-main text-white hover:text-[#18242D] transition-all duration-200"
      disabled={disabled}
    >
      <span className="text-24 font-700">{text}</span>
    </button>
  );
};

export default RoundedSquareButton;
