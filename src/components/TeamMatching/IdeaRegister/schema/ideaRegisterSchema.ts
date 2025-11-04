import { z } from 'zod';

export const ideaRegisterSchema = z.object({
  name: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(15, { message: '15자 이하로 입력해주세요' }),
  description: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
  appType: z
    .array(
      z.enum(['Web', 'Android', 'iOS', 'PC_프로그램', '크로스플랫폼', '하이브리드앱']).nullable()
    )
    .min(1, '최소 1개 이상 선택해주세요.')
    .max(3, '최대 3개까지 선택 가능합니다.'),
  mainImg: z
    .any()
    .refine((files) => files?.length > 0, '이미지 파일을 업로드해주세요.')
    .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, '5MB 이하의 이미지만 가능합니다.')
    .refine(
      (files) => files?.[0]?.type.startsWith('image/'),
      '이미지 형식(jpg, png 등)만 가능합니다.'
    ),
  pdfFile: z
    .any()
    .refine((files) => files?.length > 0, 'PDF 파일을 업로드해주세요.')
    .refine((files) => files?.[0]?.type === 'application/pdf', 'PDF 파일만 업로드할 수 있습니다.')
    .refine(
      (files) => files?.[0]?.size <= 10 * 1024 * 1024,
      '10MB 이하의 파일만 업로드 가능합니다.'
    ),
  coreFunc: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
  developerDesc: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
});

export type IdeaRegisterSchema = z.infer<typeof ideaRegisterSchema>;
