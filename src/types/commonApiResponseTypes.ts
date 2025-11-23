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
  result?: undefined;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
