export const BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  MEMBERS: '/members',
  AUTH: '/auth',
} as const;

export type EndpointKey = keyof typeof ENDPOINTS;
export type EndpointValue = (typeof ENDPOINTS)[EndpointKey];
