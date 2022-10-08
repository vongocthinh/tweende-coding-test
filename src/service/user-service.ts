import { IPageFilter, IPageReponse } from '../interfaces/page';
import { IUser } from '../interfaces/user';

export const fetchUsers = async (filter: IPageFilter): Promise<IPageReponse<IUser>> => {
  const res = await fetch(`https://randomuser.me/api/?page=${filter.current - 1}&results=${filter.pageSize}`);
  return await res.json();
};
