import { useState } from 'react';
import ImgBtn from '../../assets/imgs/ImgBtn.svg';

interface ProjectFormImgProps {
  setResultImg: (value: string) => void;
}

const ProjectFormImg = ({ setResultImg }: ProjectFormImgProps) => {
  const [previewImg, setPreviewImg] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;

    if (files?.length) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0] as File);
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setPreviewImg(e.target.result);
          setResultImg(files[0].name);
          console.log(files[0].name);
        }
      };
    }
  };
  return (
    <div className="w-full h-500">
      <label
        htmlFor="imageFile"
        className="w-full h-full flex justify-center items-center rounded-10 bg-deepGray cursor-pointer"
      >
        <img src={ImgBtn} alt="사진 추가 버튼" className={`${previewImg ? 'hidden' : 'block'}`} />
        <img
          src={previewImg ? previewImg : ''}
          className={`w-full h-full ${previewImg ? 'block' : 'hidden'}`}
        />
      </label>
      <input id="imageFile" type="file" className="hidden" accept="image/*" onChange={onChange} />
    </div>
  );
};

export default ProjectFormImg;
