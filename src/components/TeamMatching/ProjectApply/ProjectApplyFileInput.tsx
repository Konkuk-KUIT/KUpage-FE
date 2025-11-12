import { Controller, useFormContext } from 'react-hook-form';
import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import FolderIcon from '../../../assets/imgs/FolderIcon.svg?react';
import { useMemo } from 'react';

const ProjectApplyFileInput = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const name = 'portfolioUrl';

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="w-full flex flex-col text-left font-600 text-32px">
        <span className={styles.text}>
          포트폴리오 링크를 입력해주세요. <span className="text-[#d5da40]">*</span>
        </span>
      </div>

      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const { value, onBlur, ref, name: fieldName } = field;

          const url = useMemo(() => {
            if (value instanceof File) return URL.createObjectURL(value);
            return null;
          }, [value]);

          const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0] ?? null;
            setValue(fieldName, file, { shouldValidate: true, shouldDirty: true });
          };

          if (value && url) {
            return (
              <iframe
                src={url}
                className="w-full flex items-center justify-center rounded-[10px] h-[106px]"
                title="pdf preview"
              />
            );
          }

          return (
            <div className="w-full flex items-center justify-center rounded-[10px] bg-[#4f5e69] h-[106px]">
              <label className="cursor-pointer flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <FolderIcon className="text-darkblue w-[39px] h-[32px]" />
                </div>
                <input
                  type="file"
                  name={fieldName}
                  ref={ref}
                  onBlur={onBlur}
                  accept={'application/pdf'}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          );
        }}
      />

      {errors[name] && <p style={{ color: 'red' }}>{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default ProjectApplyFileInput;
