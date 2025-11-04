import { useState } from 'react';
import { FileType } from '../components/TeamMatching/IdeaRegister/types/fileType';

export const useFileUploader = (acceptType: FileType) => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (acceptType === 'pdf' && selected.type !== 'application/pdf') {
      alert('PDF 파일만 업로드할 수 있습니다.');
      return;
    }
    if (acceptType === 'image' && !selected.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    setFile(selected);
    const objectUrl = URL.createObjectURL(selected);
    setUrl(objectUrl);
  };

  const reset = () => {
    setFile(null);
    setUrl(undefined);
  };

  return { file, url, handleChange, reset };
};
