import { Control, Controller } from 'react-hook-form';

import FileField from '../form/FileField';
import ImageField from '../form/ImageField';
import LinkField, { LinkModal, LinkModalTrigger } from '../form/LinkField';

import { BodyField } from './BodyField';
import { CodeField } from './CodeField';
import { SectionTitleField } from './SectionTitleField';

export type BlockType = 'SUB_TITLE' | 'TEXT' | 'CODE' | 'FILE' | 'URL' | 'IMAGE';

export interface TextBlock {
  type: 'SUB_TITLE' | 'TEXT';
  properties: {
    title: string;
  };
}

export interface CodeBlock {
  type: 'CODE';
  properties: {
    title: string;
    code_lang: string;
  };
}

export interface ResourceBlock {
  type: 'FILE' | 'URL' | 'IMAGE';
  properties: {
    url: string;
    title: string;
  };
}

export type ContentBlock = { id: string; position: number } & (
  | TextBlock
  | CodeBlock
  | ResourceBlock
);

export interface ArticleFormData {
  title: string;
  /**
   * warn: must stringify properties when sending to API
   */
  blocks: ContentBlock[];
}

// API 응답 형식
export interface ArticleBlock {
  position: number;
  type: BlockType;
  properties: string; // JSON string
  language?: string; // CODE 타입일 때만
}

export interface ArticleApiData {
  title: string;
  blocks: ArticleBlock[];
}

// API 데이터를 폼 데이터로 변환하는 유틸 함수
export const convertApiDataToFormData = (apiData: ArticleApiData): ArticleFormData => {
  return {
    title: apiData.title,
    blocks: apiData.blocks.map((block) => {
      const properties = JSON.parse(block.properties);
      const id = `${block.type}-${block.position}-${Date.now()}`;

      if (block.type === 'SUB_TITLE' || block.type === 'TEXT') {
        return {
          id,
          position: block.position,
          type: block.type,
          properties: {
            title: properties.title || '',
          },
        };
      } else if (block.type === 'CODE') {
        return {
          id,
          position: block.position,
          type: block.type,
          properties: {
            title: properties.title || '',
            code_lang: properties.code_lang || block.language || '',
          },
        };
      } else {
        return {
          id,
          position: block.position,
          type: block.type,
          properties: {
            url: properties.url || '',
            title: properties.title || '',
          },
        };
      }
    }),
  };
};

// ContentBlock에서 key를 구하는 함수 (항상 id 사용, id는 항상 존재)
export const getBlockKey = (block: ContentBlock): string => {
  return block.id;
};

// position을 0부터 순차적으로 재정렬하는 정규화 함수 (삭제 후 사용)
export const normalizePositions = (blocks: ContentBlock[]): ContentBlock[] => {
  return blocks.map((block, index) => ({
    ...block,
    position: index,
  }));
};

interface ArticleFormFieldsProps {
  field: ContentBlock;
  index: number;
  control: Control<ArticleFormData>;
}

export const ArticleFormFields = ({ field, index, control }: ArticleFormFieldsProps) => {
  switch (field.type) {
    case 'SUB_TITLE':
      return (
        <Controller
          name={`blocks.${index}.properties.title`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <SectionTitleField
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="소제목을 입력해주세요."
              autoFocus
            />
          )}
        />
      );
    case 'TEXT':
      return (
        <Controller
          name={`blocks.${index}.properties.title`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <BodyField
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="본문을 입력해주세요."
              autoFocus
            />
          )}
        />
      );
    case 'CODE':
      return (
        <Controller
          name={`blocks.${index}.properties.title`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CodeField
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="코드를 입력해주세요."
              autoFocus
            />
          )}
        />
      );
    case 'URL':
      return (
        <Controller
          name={`blocks.${index}.properties.url`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <LinkField link={value || ''}>
              <LinkModalTrigger />
              <LinkModal
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder="URL을 입력해주세요."
              />
            </LinkField>
          )}
        />
      );
    case 'IMAGE':
      return (
        <Controller
          name={`blocks.${index}.properties.url`}
          control={control}
          render={({ field: { onChange } }) => (
            <ImageField
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    onChange(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          )}
        />
      );
    case 'FILE':
      return (
        <Controller
          name={`blocks.${index}.properties.url`}
          control={control}
          render={({ field: { onChange } }) => (
            <FileField
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  onChange(URL.createObjectURL(file));
                }
              }}
            />
          )}
        />
      );
    default:
      return null;
  }
};
