export interface IApiResponse<T> {
  entity: T | undefined;
  success: boolean;
  message: string;
}