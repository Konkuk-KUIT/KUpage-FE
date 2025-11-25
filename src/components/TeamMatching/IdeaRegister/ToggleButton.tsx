import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface Props {
  name: string;
  value: string;
  field: string;
}

const ToggleButton = ({ name, value, field }: Props) => {
  const { watch, setValue } = useFormContext();
  const selectedValue: string = watch(field);

  const isActive = selectedValue === value;

  const toggle = () => {
    const nextValue = isActive ? '' : value;

    setValue(field, nextValue, { shouldValidate: true, shouldDirty: true });
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

export default ToggleButton;
