export const BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  MEMBERS: '/members',
  AUTH: '/auth',
  IDEAS: '/ideas',
  TEAMS: '/teams',
  IMG_UPLOAD: '/pre-signed/articles/image',
  FILE_UPLOAD: '/pre-signed/articles/file',
} as const;

export type EndpointKey = keyof typeof ENDPOINTS;
export type EndpointValue = (typeof ENDPOINTS)[EndpointKey];
