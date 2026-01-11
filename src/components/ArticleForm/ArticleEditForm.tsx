import { useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import clsx from 'clsx';

import {
  ArticleApiData,
  ArticleFormData,
  ArticleFormFields,
  BlockType,
  getBlockKey,
  normalizePositions,
} from './ArticleFormFields';
import { EmptyForm } from './EmptyForm';

import KUITLogo from '/KUITLogo.svg';

const ToolbarButton = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'px-[19px] py-[12px] rounded-[10px] h-[48px] border border-border flex-center bg-gray text-white',
        'hover:bg-main hover:text-[#18232d] hover:border-bg-main',
        'text-[20px] font-700 font-bold tracking-[0]'
      )}
    >
      {label}
    </button>
  );
};

const HORIZONTAL_PADDING = 'px-[47px] pr-[44px]';

interface ArticleEditFormProps {
  defaultValues?: ArticleFormData;
  // onAPIData: 이 함수로 실제 통신 코드, 컴포넌트내 submit은 폼 데이터 가공만
}

export const ArticleEditForm = ({ defaultValues }: ArticleEditFormProps) => {
  // defaultValues 정규화: position을 0부터 순차적으로 재정렬
  const normalizedDefaultValues: ArticleFormData = defaultValues
    ? {
        title: defaultValues.title,
        blocks: normalizePositions(defaultValues.blocks),
      }
    : {
        title: '',
        blocks: [],
      };

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const { control, register, handleSubmit } = useForm<ArticleFormData>({
    defaultValues: normalizedDefaultValues,
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'blocks',
  });
  // TODO: 삭제 기능 도입 시 remove도 사용
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'blocks',
  // });

  const addField = (type: BlockType) => {
    const id = `${type}-${Date.now()}`;
    const position = fields.length;

    if (type === 'SUB_TITLE' || type === 'TEXT') {
      append({
        id,
        position,
        type,
        properties: {
          title: '',
        },
      });
    } else if (type === 'CODE') {
      append({
        id,
        position,
        type,
        properties: {
          title: '',
          code_lang: '',
        },
      });
    } else if (type === 'FILE' || type === 'URL' || type === 'IMAGE') {
      append({
        id,
        position,
        type,
        properties: {
          url: '',
          title: '',
        },
      });
    }
    // 필드 추가시 밑으로 내림
    const scrollHeight = containerRef.current?.scrollHeight ?? 0;
    requestAnimationFrame(() => {
      // 경험상 320이 좋아보임, 하드코딩인데 이걸 풀 방법은 모르겠음
      const top = Math.max(0, scrollHeight - 320);
      containerRef.current?.scrollTo({
        top,
        behavior: 'smooth',
      });
    });
  };

  const onSubmit = (data: ArticleFormData) => {
    // position을 0부터 순차적으로 정규화 후 API 형식으로 변환
    const normalizedBlocks = normalizePositions(data.blocks);
    const apiData: ArticleApiData = {
      title: data.title,
      blocks: normalizedBlocks.map((block) => {
        const properties: Record<string, string> = {};

        if (block.type === 'SUB_TITLE' || block.type === 'TEXT') {
          properties.title = block.properties.title;
        } else if (block.type === 'CODE') {
          properties.title = block.properties.title;
          // TODO: 언어 선택은 나중에, 딱히 Ui가 없음
          properties.code_lang = 'Python';
        } else if (block.type === 'FILE' || block.type === 'URL' || block.type === 'IMAGE') {
          properties.url = block.properties.url;
          properties.title = block.properties.title || '제목없음';
        }

        const apiBlock: ArticleApiData['blocks'][0] = {
          position: block.position,
          type: block.type,
          properties: JSON.stringify(properties),
        };

        if (block.type === 'CODE' && block.properties.code_lang) {
          apiBlock.language = block.properties.code_lang;
        }

        return apiBlock;
      }),
    };

    console.log('API data:', apiData);
    // TODO: API 호출
  };

  // 삭제 기능 (나중에 사용)
  // const deleteField = (index: number) => {
  //   // remove는 useFieldArray에서 가져와야 함
  //   // remove(index);
  //   // position은 onSubmit 시점에 normalizePositions로 자동 정규화됨 (0부터 순차적으로)
  // };

  return (
    <div className="relative bg-gradient h-screen overflow-y-auto" ref={containerRef}>
      {/* Top toolbar */}
      <header
        className={clsx(
          'w-full h-[141px] flex items-center justify-between bg-gray sticky top-0',
          HORIZONTAL_PADDING,
          'pt-[55px] pb-[38px]'
        )}
        ref={headerRef}
      >
        <div className="flex gap-[47px]">
          <img src={KUITLogo} alt="KUIT Logo" width={63} height={55} />
          <div className="flex gap-[14px]">
            <ToolbarButton label="사진" onClick={() => addField('IMAGE')} />
            <ToolbarButton label="링크" onClick={() => addField('URL')} />
            <ToolbarButton label="파일" onClick={() => addField('FILE')} />
            <ToolbarButton label="코드" onClick={() => addField('CODE')} />
            <ToolbarButton label="본문" onClick={() => addField('TEXT')} />
            <ToolbarButton label="소제목" onClick={() => addField('SUB_TITLE')} />
          </div>
        </div>
        <div className="flex gap-12">
          <ToolbarButton label="미리보기" />
          <ToolbarButton label="등록하기" onClick={handleSubmit(onSubmit)} />
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          {...register('title')}
          placeholder="제목을 입력해주세요."
          className={clsx(
            HORIZONTAL_PADDING,
            'text-[48px] font-700 text-main w-full bg-transparent outline-none pt-[56px] pb-[40px]'
          )}
          autoFocus
        />
        <hr className="w-full h-[9px] bg-[#2c373f]" />
        <div
          className={clsx(
            HORIZONTAL_PADDING,
            'w-full flex flex-col gap-[27px] pt-[40px] pb-[180px]'
          )}
        >
          {fields.length === 0 ? (
            <EmptyForm />
          ) : (
            fields.map((field, index) => (
              <ArticleFormFields
                key={getBlockKey(field)}
                field={field}
                index={index}
                control={control}
              />
            ))
          )}
        </div>
      </form>
    </div>
  );
};
