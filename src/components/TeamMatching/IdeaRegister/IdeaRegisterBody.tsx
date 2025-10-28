import { APPLICATION_TYPE } from './applicationType.constants';
import IdeaRegisterFileInput from './IdeaRegisterFileInput';
import { styles } from './ideaRegisterStyle.constants';
import IdeaRegisterTextInput from './IdeaRegisterTextInput';

const IdeaRegisterBody = () => {
  return (
    <div className="w-full flex flex-col gap-[130px]">
      <div className="w-full flex flex-col gap-[10px]">
        <div className={styles.text}>
          서비스명을 입력해주세요. <span className="text-[#d5da40]">*</span>
        </div>
        <input className={styles.input} placeholder="내용을 입력해주세요."></input>
      </div>

      <IdeaRegisterTextInput
        label={'서비스에 대한 한 줄 소개를 입력해주세요.'}
        textAreaHeight={271}
      />

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

      <IdeaRegisterFileInput
        text={'메인 이미지를 등록해주세요.'}
        subText={'330 X 130 사이즈의 이미지를 권장해요.'}
        fileType={'image'}
      />

      <IdeaRegisterFileInput
        text={'서비스 소개서 파일을 업로드해주세요.'}
        subText={'PDF 파일만 업로드가 가능해요.'}
        fileType={'pdf'}
      />

      <IdeaRegisterTextInput
        label={'서비스의 핵심 기능과 그에 따른 개발 요구사항을 적어주세요.'}
        textAreaHeight={442}
      />

      <IdeaRegisterTextInput
        label={'함께 프로젝트를 진행하고 싶은 개발자에 대해 설명해주세요.'}
        textAreaHeight={442}
      />
    </div>
  );
};

export default IdeaRegisterBody;
