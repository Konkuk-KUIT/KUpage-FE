import { useFileUploader } from '../../../hooks/useFileUploader';
import { styles } from './ideaRegisterStyle.constants';
import { FileType } from './types/fileType';

interface Props {
  fileType: FileType;
  text: string;
  subText: string;
}

const IdeaRegisterFileInput = ({ fileType, text, subText }: Props) => {
  const fileUploader = useFileUploader(fileType);

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="w-full flex flex-col text-left font-600 text-32px">
        <span className={styles.text}>
          {text} <span className="text-[#d5da40]">*</span>
        </span>
        <span className={styles.subtext}>* {subText}</span>
      </div>
      {fileUploader.file ? (
        fileType === 'image' ? (
          <img
            src={fileUploader.url}
            alt="imgFile"
            className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
          />
        ) : (
          <iframe
            src={fileUploader.url}
            className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
          />
        )
      ) : (
        <div className="w-full h-[501px] flex items-center justify-center rounded-[10px] bg-gray-100">
          <input
            type="file"
            accept={fileType === 'image' ? 'image/*' : 'application/pdf'}
            onChange={fileUploader.handleChange}
            className="block"
          />
        </div>
      )}
    </div>
  );
};

export default IdeaRegisterFileInput;
