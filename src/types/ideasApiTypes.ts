export interface FileUploadRequest {
  contentType: string;
  contentLength: number;
  contentName: string;
}

export interface FileUploadResult {
  presignedUrl: string;
  fileUrl: string;
}
