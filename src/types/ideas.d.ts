export interface FileUploadRequest {
  contentType: string;
  contentLength: number;
  contentName: string;
}

export interface FileUploadResult {
  presignedUrl: string;
  fileUrl: string;
}

export interface FileUploadResponse {
  isSuccess: boolean;
  responseCode: number;
  responseMessage: string;
  result: FileUploadResult;
}
