import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

const AppTypeToggle = ({ name, value }: { name: string; value: string }) => {
  const { watch, setValue } = useFormContext();
  const selected: string[] = watch('appType') ?? [];

  const isActive = selected.includes(value);
  const toggle = () => {
    let nextValues = selected;
    if (isActive) {
      nextValues = selected.filter((v) => v !== value);
    } else {
      if (selected.length >= 3) return;
      nextValues = [...selected, value];
    }

    setValue('appType', nextValues, { shouldValidate: false, shouldDirty: true });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={clsx(
        'bg-gray flex items-center justify-center h-[48px] px-[24px] py-[11px] rounded-24 border-solid border-[2px]',
        isActive
          ? 'border-main bg-main text-darkblue'
          : 'border-white hover:text-darkblue hover:bg-main hover:border-main'
      )}
    >
      {name}
    </button>
  );
};

export default AppTypeToggle;
