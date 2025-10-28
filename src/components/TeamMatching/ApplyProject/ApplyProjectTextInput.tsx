import { useState } from 'react';
import { styles } from './applyProjectStyle.constants';

interface Props {
  label: string;
  textAreaHeight: number;
}

const ApplyProjectTextInput = ({ label, textAreaHeight }: Props) => {
  const [currentLength, setCurrentLength] = useState<number>(0);

  const textEditHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLength(e.target.textLength);
  };

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className={styles.text}>
        {label} <span className="text-[#d5da40]">*</span>
      </div>
      <div className="relative">
        <textarea
          className={styles.input}
          style={{ height: textAreaHeight + 'px' }}
          placeholder="내용을 입력해주세요."
          onChange={textEditHandler}
        ></textarea>
        <span className="absolute bottom-[10px] right-[10px] text-border">{currentLength}/500</span>
      </div>
    </div>
  );
};

export default ApplyProjectTextInput;
