import { APPLICATION_TYPE } from './applicationType.constants';
import { useFileUploader } from '../../../hooks/useFileUploader';

const styles = {
  text: 'w-full text-left font-600 text-[32px]',
  subtext: 'text-[13px] font-400 text-[#d5da40]',
  input:
    'w-full px-[22px] py-[25px] rounded-[10px] border-[2px] border-solid border-border bg-gray placeholder:text-border',
};

const ApplyProjectBody = () => {
  const imgUploader = useFileUploader('image');
  const pdfUploader = useFileUploader('pdf');

  return (
    <div className="w-full flex flex-col gap-[130px]">
      <div className="w-full flex flex-col gap-[10px]">
        <div className={styles.text}>
          서비스명을 입력해주세요. <span className="text-[#d5da40]">*</span>
        </div>
        <input className={styles.input} placeholder="내용을 입력해주세요."></input>
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className={styles.text}>
          서비스에 대한 한 줄 소개를 입력해주세요. <span className="text-[#d5da40]">*</span>
        </div>
        <input className={styles.input} placeholder="내용을 입력해주세요."></input>
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex flex-col text-left font-600 text-32px">
          <span className={styles.text}>서비스의 앱 유형을 선택해주세요.</span>
          <span className={styles.subtext}>
            * 해당하는 카테고리를 모두 선택해주세요. (최대 3개)
          </span>
        </div>
        <div className="w-full flex flex-row gap-[10px]">
          {APPLICATION_TYPE.map((appType) => {
            return (
              <button className="bg-gray flex items-center justify-center h-[48px] px-[24px] py-[11px] rounded-24 border-solid border-[2px] border-white hover:text-darkblue hover:bg-main hover:border-main">
                {appType.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex flex-col text-left font-600 text-32px">
          <span className={styles.text}>
            메인 이미지를 등록해주세요. <span className="text-[#d5da40]">*</span>
          </span>
          <span className={styles.subtext}>* 330 X 130 사이즈의 이미지를 권장해요.</span>
        </div>
        {imgUploader.file ? (
          <img
            src={imgUploader.url}
            alt="imgFile"
            className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
          />
        ) : (
          <div className="w-full h-[501px] flex items-center justify-center rounded-[10px] bg-gray-100">
            <input
              type="file"
              accept="image/*"
              onChange={imgUploader.handleChange}
              className="block"
            />
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex flex-col text-left font-600 text-32px">
          <span className={styles.text}>
            서비스 소개서 파일을 업로드해주세요. <span className="text-[#d5da40]">*</span>
          </span>
          <span className={styles.subtext}>* PDF 파일만 업로드가 가능해요.</span>
        </div>
        {pdfUploader.file ? (
          <iframe
            src={pdfUploader.url}
            className="w-full h-[501px] flex items-center justify-center rounded-[10px]"
          />
        ) : (
          <div className="w-full h-[501px] flex items-center justify-center rounded-[10px] bg-gray-100">
            <input
              type="file"
              accept="application/pdf"
              onChange={pdfUploader.handleChange}
              className="block"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyProjectBody;
