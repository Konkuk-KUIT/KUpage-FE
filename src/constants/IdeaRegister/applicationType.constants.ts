export const APPLICATION_TYPE = [
  {
    id: 0,
    name: 'Web',
    value: 'Web',
  },
  {
    id: 1,
    name: 'Android',
    value: 'Android',
  },
  {
    id: 2,
    name: 'iOS',
    value: 'iOS',
  },
  {
    id: 3,
    name: 'PC 프로그램',
    value: 'PC_프로그램',
  },
  {
    id: 4,
    name: '크로스플랫폼',
    value: '크로스플랫폼',
  },
  {
    id: 5,
    name: '하이브리드 앱',
    value: '하이브리드앱',
  },
] as const;

export type ApplicationTypeValue = (typeof APPLICATION_TYPE)[number]['value'];
