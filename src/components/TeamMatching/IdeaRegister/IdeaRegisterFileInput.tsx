import { useFileUploader } from '../../../hooks/useFileUploader';
import { styles } from './ideaRegisterStyle.constants';
import { FileType } from './types/fileType';

import FolderIcon from '../../../assets/imgs/FolderIcon.svg';
import ImageIcon from '../../../assets/imgs/ImageIcon.svg';

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
          {/* ✅ label로 감싸서 클릭 시 input이 트리거되도록 */}
          <label className="cursor-pointer flex flex-col items-center justify-center">
            {fileType === 'image' ? (
              <img src={ImageIcon} alt="image icon" className="w-[80px] h-[80px]" />
            ) : (
              <div>
                <img src={FolderIcon} alt="folder icon" className="w-[80px] h-[80px]" />

                <span className="mt-4 text-gray-500 text-[18px]">파일 업로드</span>
              </div>
            )}

            <input
              type="file"
              accept={fileType === 'image' ? 'image/*' : 'application/pdf'}
              onChange={fileUploader.handleChange}
              className="hidden" // ✅ 기본 input 숨김
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default IdeaRegisterFileInput;
