export interface IPageFilter {
  current: number;
  pageSize: number;
}

export interface IReponseInfo {
  seed: string;
  result: number;
  page: number;
  version: string;
}

export interface IPageReponse<T> {
  info: IReponseInfo;
  results: T[];
}
