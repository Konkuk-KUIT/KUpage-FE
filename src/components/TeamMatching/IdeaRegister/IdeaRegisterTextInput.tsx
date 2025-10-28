import { useState } from 'react';
import clsx from 'clsx';
import { styles } from './ideaRegisterStyle.constants';

interface Props {
  label: string;
  textAreaHeight: number;
}

const IdeaRegisterTextInput = ({ label, textAreaHeight }: Props) => {
  const TEXT_LIMITATION = 500;
  const [textValue, setTextValue] = useState<string>('');
  const [currentLength, setCurrentLength] = useState<number>(0);

  const textEditHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length > TEXT_LIMITATION) return;
    setTextValue(newValue);
    setCurrentLength(newValue.length);
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
          value={textValue}
        ></textarea>
        <span className={clsx('absolute bottom-[10px] right-[10px] text-border')}>
          {currentLength}/{TEXT_LIMITATION}
        </span>
      </div>
    </div>
  );
};

export default IdeaRegisterTextInput;
