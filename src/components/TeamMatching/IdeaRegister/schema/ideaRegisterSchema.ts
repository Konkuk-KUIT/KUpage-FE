import { z } from 'zod';

export const ideaRegisterSchema = z.object({
  serviceName: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(100, { message: '100자 이하로 입력해주세요' }),
  topicSummary: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
  appType: z
    .array(z.enum(['Web', 'Android', 'iOS', 'PC_프로그램', '크로스플랫폼', '하이브리드앱']))
    .min(1, '최소 1개 이상 선택해주세요.')
    .max(3, '최대 3개까지 선택 가능합니다.'),
  imageUrl: z
    .instanceof(File, { message: '이미지 파일을 업로드해주세요.' })
    .refine((f) => f.type.startsWith('image/'), '이미지 형식만 가능합니다.')
    .refine((f) => f.size <= 5 * 1024 * 1024, '5MB 이하만 가능합니다.'),
  serviceIntroFile: z
    .instanceof(File, { message: 'pdf 파일을 업로드해주세요.' })
    .refine((f) => f.type === 'application/pdf', 'PDF 파일만 업로드할 수 있습니다.')
    .refine((f) => f.size <= 10 * 1024 * 1024, '10MB 이하만 가능합니다.'),
  featureRequirements: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
  preferredDeveloper: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(500, { message: '500자 이하로 입력해주세요' }),
});

export type IdeaRegisterSchema = z.infer<typeof ideaRegisterSchema>;
