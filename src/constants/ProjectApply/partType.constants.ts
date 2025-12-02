export type Part = 'Web_App' | 'Native_App' | 'Server';
export const PART_TYPE = [
  {
    id: 0,
    name: 'Web',
    value: 'Web',
  },
  {
    id: 1,
    name: 'Server',
    value: 'Server',
  },
  {
    id: 2,
    name: 'Android',
    value: 'Android',
  },
] as const;

export type partTypeValue = (typeof PART_TYPE)[number]['value'];

export const partMapper: Record<partTypeValue, Part> = {
  Web: 'Web_App',
  Android: 'Native_App',
  Server: 'Server',
} as const;
