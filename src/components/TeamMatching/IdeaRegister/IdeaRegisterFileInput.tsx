// import { useFileUploader } from '../../../hooks/useFileUploader';
// import { styles } from './ideaRegisterStyle.constants';
// import { FileType } from './types/fileType';

// import FolderIcon from '../../../assets/imgs/FolderIcon.svg?react';
// import ImageIcon from '../../../assets/imgs/ImageIcon.svg?react';

// interface Props {
//   fileType: FileType;
//   text: string;
//   subText: string;
// }

// const IdeaRegisterFileInput = ({ fileType, text, subText }: Props) => {
//   const fileUploader = useFileUploader(fileType);

//   return (
//     <div className="w-full flex flex-col gap-[10px]">
//       <div className="w-full flex flex-col text-left font-600 text-32px">
//         <span className={styles.text}>
//           {text} <span className="text-[#d5da40]">*</span>
//         </span>
//         <span className={styles.subtext}>* {subText}</span>
//       </div>
//       {fileUploader.file ? (
//         fileType === 'image' ? (
//           <img
//             src={fileUploader.url}
//             alt="imgFile"
//             className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
//           />
//         ) : (
//           <iframe
//             src={fileUploader.url}
//             className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
//           />
//         )
//       ) : (
//         <div className="w-full h-[501px] flex items-center justify-center rounded-[10px] bg-[#4f5e69]">
//           <label className="cursor-pointer flex flex-col items-center justify-center">
//             {fileType === 'image' ? (
//               <ImageIcon className="text-[#2f383f] w-[107px] h-[107px]" />
//             ) : (
//               <div className="flex flex-col items-center justify-center">
//                 <FolderIcon className="text-darkblue w-[39px] h-[32px]" />
//                 <div className="mt-4 text-[#2f383f] text-[15px] text-600">
//                   최대 50MB까지 업로드가 가능해요.
//                 </div>
//               </div>
//             )}

//             <input
//               type="file"
//               accept={fileType === 'image' ? 'image/*' : 'application/pdf'}
//               onChange={fileUploader.handleChange}
//               className="hidden" // ✅ 기본 input 숨김
//             />
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IdeaRegisterFileInput;
import { Controller, useFormContext } from 'react-hook-form';
import { styles } from './ideaRegisterStyle.constants';
import { FileType } from './types/fileType';
import FolderIcon from '../../../assets/imgs/FolderIcon.svg?react';
import ImageIcon from '../../../assets/imgs/ImageIcon.svg?react';
import { useMemo } from 'react';

interface Props {
  name: 'mainImg' | 'pdfFile';
  fileType: FileType; // 'image' | 'pdf'
  text: string;
  subText: string;
}

const IdeaRegisterFileInput = ({ name, fileType, text, subText }: Props) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="w-full flex flex-col text-left font-600 text-32px">
        <span className={styles.text}>
          {text} <span className="text-[#d5da40]">*</span>
        </span>
        <span className={styles.subtext}>* {subText}</span>
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
            setValue(name, file, { shouldValidate: true, shouldDirty: true });
          };

          if (value && url) {
            return fileType === 'image' ? (
              <img
                src={url}
                alt="imgFile"
                className="w-full flex items-center justify-center rounded-[10px] h-[501px]"
              />
            ) : (
              <iframe
                src={url}
                className="w-full flex items-center justify-center rounded-[10px] h-[501px]"
                title="pdf preview"
              />
            );
          }

          return (
            <div className="w-full flex items-center justify-center rounded-[10px] bg-[#4f5e69] h-[501px]">
              <label className="cursor-pointer flex flex-col items-center justify-center">
                {fileType === 'image' ? (
                  <ImageIcon className="text-[#2f383f] w-[107px] h-[107px]" />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <FolderIcon className="text-darkblue w-[39px] h-[32px]" />
                    <div className="mt-4 text-[#2f383f] text-[15px] text-600">
                      최대 50MB까지 업로드가 가능해요.
                    </div>
                  </div>
                )}

                <input
                  type="file"
                  name={fieldName}
                  ref={ref}
                  onBlur={onBlur}
                  accept={fileType === 'image' ? 'image/*' : 'application/pdf'}
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

export default IdeaRegisterFileInput;
