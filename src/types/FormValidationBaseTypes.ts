export type SetError<Schema> = (field: keyof Schema, reason: string) => void;

export interface FormBase<Schema> {
  /**
   * 폼 필드 하나의 값을 세팅
   */
  setFormValue: <K extends keyof Schema>(field: K, value: Schema[K]) => void;
  /**
   * 전체 폼 값
   */
  values: Schema;
  /**
   * 필드 하나의 폼 데이터 가져옴
   */
  getFormValue: <K extends keyof Schema>(field: K) => Schema[K];
  /**
   * 필드별 폼 에러와 에러 메시지, 서버 에러는 관여안함, 일단 필드당 에러는 하나만 설정
   */
  errors?: Partial<Record<keyof Schema, string>>;
  /**
   * 에러 트리거
   */
  setError: SetError<Schema>;
  /**
   * 에러뜨면 폼 제출 안함
   */
  onSubmit: (callback: () => void) => void;
  /**
   * 폼 데이터랑 에러 다 없앰
   */
  clearForm: () => void;
}

export interface FormSetter<Schema> {
  /**
   * 기본값, 일단 지금은 필요없음
   */
  defaultValue?: Schema;
}
