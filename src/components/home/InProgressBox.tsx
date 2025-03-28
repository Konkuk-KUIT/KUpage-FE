interface InProgressBoxProps {
  title: string;
  count: number;
}

// TODO: 숫자 올라가는 애니메이션 구현
const InProgressBox = ({ title, count }: InProgressBoxProps) => {
  return (
    <div className="flex-center flex-col">
      <p className="text-white font-500 text-24">{title}</p>
      <div className="mt-20 flex items-end px-104 py-40 rounded-10 border-border border-2 gap-4">
        <span className="text-main font-700 text-48">{count}</span>
        <span className="text-white font-700 text-20 mb-12">개</span>
      </div>
    </div>
  );
};

export default InProgressBox;
