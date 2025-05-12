import Counter from './Counter';

interface InProgressBoxProps {
  title: string;
  count: number;
  counters?: string;
}

const InProgressBox = ({ title, count, counters = '개' }: InProgressBoxProps) => {
  return (
    <div className="flex-center flex-col">
      <p className="text-white font-500 text-24">{title}</p>
      <div className="mt-20 flex justify-center items-center w-252 h-152 rounded-10 border-border border-2 gap-4">
        <Counter end={count} duration={2000} />
        <span className="text-white font-700 text-20 mt-12">{counters}</span>
      </div>
    </div>
  );
};

export default InProgressBox;
