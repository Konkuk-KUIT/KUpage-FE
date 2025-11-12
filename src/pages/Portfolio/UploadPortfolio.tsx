import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FormData } from '../../types/PortfolioFormTypes';
import FormSection from '../../components/commons/FormSection';
import SelectableChipGroup from '../../components/Project/SelectableChipGroup';
import FileBtn from '../../assets/imgs/FileBtn.svg';
import ProjectFormLink from '../../components/Project/ProjectFormLink';
import TextChip from '../../components/commons/TextChip';
import {
  ALL_TAG_SUGGESTIONS,
  PART_OPTIONS,
  TAG_SUGGESTIONS_ROW1,
  TAG_SUGGESTIONS_ROW2,
} from '../../constants/PortfolioConstants';
import TextButton from '../../components/commons/TextButton';

const UploadPortfolio = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      shortDescription: '',
      part: [],
      portfolioFile: null,
      portfolioLink: '',
      detailedDescription: '',
      tags: [],
      visibility: null,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    register('tags', {
      validate: {
        min: (tagsArray) => tagsArray.length > 0 || '태그를 1개 이상 입력해주세요.',
        max: (tagsArray) => tagsArray.length <= 5 || `태그는 최대 5개까지 선택 가능합니다.`,
      },
    });
  }, [register]);

  const [currentTag, setCurrentTag] = useState('');
  const currentTags = watch('tags');

  const detailedDescriptionValue = watch('detailedDescription') ?? '';
  const currentDescLength = detailedDescriptionValue.length;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('제출된 데이터:', data);
    alert('포트폴리오가 등록되었습니다.');
  };

  const handleAddTag = (tagToAdd: string) => {
    const newTag = tagToAdd.trim();

    if (currentTags.length >= 5) {
      alert(`태그는 최대 5개까지 선택 가능합니다.`);
      setCurrentTag('');
      return;
    }

    if (newTag && !currentTags.includes(newTag)) {
      setValue('tags', [...currentTags, newTag], { shouldValidate: true });
    }
    setCurrentTag('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      'tags',
      currentTags.filter((tag) => tag !== tagToRemove),
      { shouldValidate: true }
    );
  };

  const handleToggleTag = (tagToToggle: string) => {
    if (currentTags.includes(tagToToggle)) {
      handleRemoveTag(tagToToggle);
    } else {
      handleAddTag(tagToToggle);
    }
  };

  const customTags = currentTags.filter((tag) => !ALL_TAG_SUGGESTIONS.includes(tag));

  return (
    <div className="relative">
      <div
        className="min-h-screen w-full pb-552"
        style={{
          background: 'var(--1, linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%))',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="sticky top-0 z-popup flex justify-between items-center w-full px-48 pt-100 pb-32 bg-darkblue">
            <h1 className="text-64 font-700 text-white">Portfolio</h1>
            <TextButton text="완료하기" isActive={isValid} px="px-48" py="py-20" />
          </section>

          <div className="flex flex-col gap-132 px-48 pt-32">
            <FormSection title="서비스에 대한 한 줄 소개를 입력해주세요." required>
              <input
                {...register('shortDescription', { required: '한 줄 소개를 입력해주세요.' })}
                className="w-full h-72 p-16 bg-gray text-24 text-white border-2 border-border rounded-10"
              />
            </FormSection>

            <FormSection title="파트를 선택해주세요." required>
              <Controller
                name="part"
                control={control}
                rules={{ required: '파트를 선택해주세요.' }}
                render={({ field }) => (
                  <SelectableChipGroup
                    options={PART_OPTIONS}
                    isSelected={field.value}
                    setIsSelected={field.onChange}
                    checkedLimit={6}
                  />
                )}
              />
            </FormSection>

            <FormSection
              title="포트폴리오 파일을 업로드해주세요."
              desc="* PDF 파일만 업로드가 가능해요. "
              required
            >
              <Controller
                name="portfolioFile"
                control={control}
                rules={{ required: '포트폴리오 파일을 업로드해주세요.' }}
                render={({ field: { onChange, value, ...restField } }) => (
                  <label className="w-full h-264 bg-deepGray rounded-10 flex flex-col items-center justify-center text-gray text-16 font-600 cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf" // pdf만 선택 가능
                      className="hidden"
                      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
                      {...restField}
                      value={undefined} // 재선택이 가능하도록
                    />
                    <div className="flex flex-col items-center justify-center gap-12">
                      <img src={FileBtn} />
                      {value ? (
                        // 파일이 선택된 경우: 파일 이름 보여주기
                        <span>{value.name}</span>
                      ) : (
                        <span>최대 10MB까지 업로드가 가능해요.</span>
                      )}
                    </div>
                  </label>
                )}
              />
            </FormSection>

            <FormSection
              title="여러분를 나타낼 수 있는 포트폴리오를 업로드해주세요. (링크)"
              fontSize={20}
              gap={12}
            >
              <Controller
                name="portfolioLink"
                control={control}
                defaultValue={''}
                render={({ field }) => (
                  <ProjectFormLink link={field.value} setLink={field.onChange} />
                )}
              />
            </FormSection>

            <FormSection
              title="포트폴리오 외에, 여러분을 자유롭게 소개해 주세요. 원하는 태그가 없다면, 입력창에 입력하여 직접 추가해 보세요."
              required
              fontSize={20}
              gap={12}
            >
              <div className="relative w-full">
                <textarea
                  {...register('detailedDescription', {
                    required: '소개를 입력해주세요.',
                    maxLength: {
                      value: 800,
                      message: `최대 800자까지 입력 가능합니다.`,
                    },
                  })}
                  className="w-full h-400 px-24 py-20 bg-gray text-white text-24 border-2 border-border rounded-10 resize-none placeholder-border"
                  placeholder="자기소개를 입력해주세요."
                />
                <span className="absolute bottom-16 right-16 text-border text-12">
                  {currentDescLength} / 800
                </span>
              </div>
            </FormSection>

            <FormSection
              title={
                <>
                  여러분을 나타낼 수 있는 태그를 선택해주세요.
                  <br />
                  원하는 태그가 없다면, 입력창에 입력하여 직접 추가해 보세요.
                </>
              }
              desc="* 최대 5개까지 선택이 가능합니다."
              required
            >
              <div className="flex gap-8">
                <input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      handleAddTag(currentTag);
                    }
                  }}
                  className="flex-grow h-72 p-16 bg-gray text-24 text-white border-2 border-border rounded-10"
                />
              </div>

              <div className="flex flex-wrap gap-12 mt-12">
                {TAG_SUGGESTIONS_ROW1.map((tag) => (
                  <TextChip
                    key={tag}
                    text={tag}
                    isSelected={currentTags.includes(tag)}
                    onClick={() => handleToggleTag(tag)}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-12 mt-12">
                {TAG_SUGGESTIONS_ROW2.map((tag) => (
                  <TextChip
                    key={tag}
                    text={tag}
                    isSelected={currentTags.includes(tag)}
                    onClick={() => handleToggleTag(tag)}
                  />
                ))}
              </div>
              {customTags.length > 0 && (
                <div className="flex flex-wrap gap-12 mt-12 border-t border-gray-700">
                  {customTags.map((tag) => (
                    <TextChip
                      key={tag}
                      text={tag}
                      isSelected={true} // 항상 선택된 스타일
                      onClick={() => handleRemoveTag(tag)} // 클릭 시 제거
                    />
                  ))}
                </div>
              )}
            </FormSection>

            <FormSection title="포트폴리오의 공개 범위를 설정해주세요." required>
              <Controller
                name="visibility"
                control={control}
                rules={{ validate: (value) => value !== null || '공개 범위를 선택해주세요.' }}
                render={({ field }) => (
                  <div className="flex flex-col gap-24">
                    <button
                      type="button"
                      onClick={() => field.onChange(field.value === 'public' ? null : 'public')}
                      className={`p-28 rounded-10 border-2 cursor-pointer text-left ${
                        field.value === 'public'
                          ? 'border-main bg-main text-[#1F3335]'
                          : 'border-border bg-gray text-white'
                      }`}
                    >
                      <div>
                        <p className="font-700 text-32">전체 공개</p>
                        <p className="text-500 text-24">
                          모든 사람이 볼 수 있도록 포트폴리오를 공개합니다. 파트장 뿐 아니라 KUIT
                          구성원 모두에게 피드백을 받을 수 있습니다.
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange(field.value === 'private' ? null : 'private')}
                      className={`p-28 rounded-10 border-2 cursor-pointer text-left ${
                        field.value === 'private'
                          ? 'border-main bg-main text-[#1F3335]'
                          : 'border-border bg-gray text-white'
                      }`}
                    >
                      <div className="ml-2">
                        <p className="font-700 text-32">운영진에게만 공개</p>
                        <p className="text-500 text-24">
                          KUIT 운영진 및 파트장에게만 포트폴리오를 공개하여 피드백을 받을 수
                          있습니다.
                        </p>
                      </div>
                    </button>
                  </div>
                )}
              />
            </FormSection>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadPortfolio;
