import clsx from 'clsx';
import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import { useFormContext } from 'react-hook-form';

const IdeaRegisterTextInput = () => {
  const name = 'motivation';
  const TEXT_LIMITATION = 1000;
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const value: string = watch(name) ?? '';
  const length = value.length;

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className={styles.text}>
        지원 동기를 입력해주세요. <span className="text-[#d5da40]">*</span>
      </div>
      <div className="relative">
        <textarea
          className={styles.input}
          style={{ height: 397 + 'px' }}
          placeholder="내용을 입력해주세요."
          {...register(name)}
        ></textarea>
        <span className={clsx('absolute bottom-[10px] right-[10px] text-border')}>
          {length}/{TEXT_LIMITATION}
        </span>
      </div>
      {errors[name] && <p style={{ color: 'red' }}>{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default IdeaRegisterTextInput;
