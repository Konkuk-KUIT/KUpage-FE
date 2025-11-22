export type ApiSuccess<T> = {
  code: number;
  message: string;
  success: true;
  result: T;
};

export type ApiFailure = {
  code: number;
  message: string;
  success: false;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
