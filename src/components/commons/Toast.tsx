const CustomToast = ({ message }: { message: string }) => {
  return (
    <div className="w-[809px] h-[132px] bg-[linear-gradient(180deg,_#17222C_0%,_#203536_100%)] rounded-xl px-6 py-4 flex items-center justify-center text-36 font-700 text-white">
      {message}
    </div>
  );
};

export default CustomToast;
