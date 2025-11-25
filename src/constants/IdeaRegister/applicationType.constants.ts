export const APPLICATION_TYPE = [
  {
    id: 0,
    name: '네이티브 앱',
    value: 'Native_App',
  },
  {
    id: 1,
    name: '웹 앱',
    value: 'Web_App',
  },
] as const;

export type ApplicationTypeValue = (typeof APPLICATION_TYPE)[number]['value'];
