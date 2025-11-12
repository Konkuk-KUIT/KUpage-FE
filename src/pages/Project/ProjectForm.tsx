import ProjectFormSection from '../../components/Project/ProjectFormSection';
import SelectableChipGroup from '../../components/Project/SelectableChipGroup';
import ProjectFormImg from '../../components/Project/ProjectFormImg';
import ProjectFormLink from '../../components/Project/ProjectFormLink';
import ProjectFormFile from '../../components/Project/ProjectFormFile';
import ProjectCohortDropdown from '../../components/Project/ProjectCohortDropdown';
import ProjectFormInput from '../../components/Project/ProjectFormInput';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../utils/types';
import ProjectReviewEditor from '../../components/Project/ProjectReviewEditor';
import KUITLogo from '../../assets/imgs/KUITLogo.svg';
import CreateButton from '../../components/commons/CreateButton';

const ProjectForm = () => {
  const { handleSubmit, control, reset } = useForm<IFormValues>();
  const APP_TYPE = ['Web', 'Android', 'iOS', 'PC 프로그램', '크로스플랫폼', '하이브리드 앱'];
  const APP_FIELD = [
    '헬스케어',
    '에듀테크',
    '핀테크',
    '커뮤니티',
    '이커머스',
    '푸드테크',
    '모빌리티',
    '게임',
    '스마트홈',
    'AI',
    '환경',
    '엔터테인먼트',
    '마케팅',
    'HR',
    '법률',
    '부동산',
    'SaaS',
    '보안',
    '커리어',
    '블록체인',
  ];
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="w-full min-h-screen">
      <form
        id="projectForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-128 px-48 py-60 mt-144 bg-signup-gradient w-full"
      >
        <ProjectFormSection title="서비스명을 입력해주세요." required>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: '필수 입력 항목입니다.' }}
            render={({ field }) => (
              <ProjectFormInput value={field.value} onChange={field.onChange} max={50} />
            )}
          />
        </ProjectFormSection>
        <ProjectFormSection title="서비스에 대한 한 줄 소개를 입력해주세요." required>
          <Controller
            name="desc"
            control={control}
            defaultValue=""
            rules={{ required: '필수 입력 항목입니다.' }}
            render={({ field }) => (
              <ProjectFormInput value={field.value} onChange={field.onChange} max={100} isLength />
            )}
          />
        </ProjectFormSection>
        <ProjectFormSection title="서비스에 대한 상세 설명이 담긴 페이지의 링크를 업로드해주세요.">
          <Controller
            name="link"
            control={control}
            defaultValue={''}
            render={({ field }) => <ProjectFormLink link={field.value} setLink={field.onChange} />}
          />
        </ProjectFormSection>
        <ProjectFormSection title="해당하는 기수 및 앱 유형을 선택해주세요" required gap={28}>
          <ProjectFormSection title="기수" gap={12} fontSize={24}>
            <Controller
              name="cohort"
              control={control}
              defaultValue=""
              rules={{ required: '필수 입력 항목입니다.' }}
              render={({ field }) => (
                <ProjectCohortDropdown
                  currentCohort={field.value}
                  setCurrentCohort={field.onChange}
                />
              )}
            />
          </ProjectFormSection>
          <ProjectFormSection
            title="앱 유형"
            desc="* 해당하는 카테고리를 모두 선택해주세요. (최대 3개)"
            gap={12}
            fontSize={24}
          >
            <Controller
              name="appType"
              control={control}
              defaultValue={[]}
              rules={{ required: '필수 입력 항목입니다.' }}
              render={({ field }) => (
                <SelectableChipGroup
                  options={APP_TYPE}
                  isSelected={field.value}
                  setIsSelected={field.onChange}
                  checkedLimit={3}
                />
              )}
            />
          </ProjectFormSection>
        </ProjectFormSection>
        <ProjectFormSection
          title="서비스의 해당 분야를 선택해주세요."
          desc="* 최대 두 개까지 선택이 가능합니다."
        >
          <Controller
            name="appField"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <SelectableChipGroup
                options={APP_FIELD}
                isSelected={field.value}
                setIsSelected={field.onChange}
                checkedLimit={2}
              />
            )}
          />
        </ProjectFormSection>
        <ProjectFormSection
          title="프로젝트를 개발하는 데 활용한 기술을 입력 및 선택해주세요."
          desc=" * 최대 10개까지 선택이 가능합니다."
        >
          <Controller
            name="teckStack"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <ProjectFormInput
                value={field.value}
                onChange={field.onChange}
                max={30}
                maxToggleCount={10}
                isToggle
              />
            )}
          />
        </ProjectFormSection>
        <ProjectFormSection
          title="메인 이미지를 등록해주세요."
          desc="* 330X130 사이즈의 이미지를 권장해요."
          required
        >
          <Controller
            name="imgUrl"
            control={control}
            defaultValue={''}
            rules={{ required: '필수 입력 항목입니다.' }}
            render={({ field }) => <ProjectFormImg setResultImg={field.onChange} />}
          />
        </ProjectFormSection>
        <ProjectFormSection
          title="파일을 업로드해주세요."
          desc=" * PDF 파일만 업로드가 가능해요."
          required
        >
          <Controller
            name="pdfFile"
            control={control}
            defaultValue=""
            rules={{ required: '필수 입력 항목입니다.' }}
            render={({ field }) => (
              <ProjectFormFile fileName={field.value} setFileName={field.onChange} />
            )}
          />
        </ProjectFormSection>
        <ProjectFormSection
          title="프로젝트에 함께한 팀원 이름을 등록해주세요."
          desc="* 공동 편집자로 자동등록됩니다. (최대 12명까지 등록 가능)"
          required
        >
          <Controller
            name="member"
            control={control}
            defaultValue={[]}
            rules={{ required: '필수 입력 항목입니다.' }}
            render={({ field }) => (
              <ProjectFormInput
                max={20}
                value={field.value}
                onChange={field.onChange}
                maxToggleCount={12}
                isSearch
                isToggle
              />
            )}
          />
        </ProjectFormSection>
        <Controller
          name="review"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <ProjectReviewEditor reviews={field.value} setReviews={field.onChange} />
          )}
        />
        <button type="submit">제출</button>
      </form>
      <div className="fixed top-0 left-0 right-auto w-[calc(100vw-16px)] h-144 flex justify-between items-center px-48 bg-gray z-50">
        <img src={KUITLogo} alt="로고 사진" />
        <CreateButton type="submit" form="projectForm">
          등록하기
        </CreateButton>
      </div>
    </div>
  );
};

export default ProjectForm;
