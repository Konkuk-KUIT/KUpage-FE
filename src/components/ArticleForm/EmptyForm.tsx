import clsx from 'clsx';

export const EmptyForm = () => {
  return (
    <div className={clsx('w-full flex flex-col items-center justify-center py-80 gap-24')}>
      <p className="text-white text-24 font-500">상단 도구 모음에서 콘텐츠를 추가해주세요.</p>
    </div>
  );
};
