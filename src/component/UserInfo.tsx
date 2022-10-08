import { Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks/hooks';
import { fetchUsersAsync, userCollection } from '../app/stores/userSlice';
import { IPageFilter } from '../interfaces/page';
import { IUser } from '../interfaces/user';

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(userCollection);
  const [pageFilter, setPageFilter] = useState<IPageFilter>({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(fetchUsersAsync(pageFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFilter]);

  const columns: ColumnsType<IUser> = [
    {
      title: 'Full Name',
      className: 'w-75',
      key: 'FullName',
      render: (record: IUser) => `${record?.name?.title}. ${record?.name?.first} ${record?.name?.last}`,
      sorter: (a: IUser, b: IUser) => `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`),
    },
    {
      title: 'Username',
      key: 'Username',
      className: 'w-75',
      render: (record: IUser) => record?.login?.username,
      sorter: (a: IUser, b: IUser) => a.login.username.localeCompare(`${b.login.username} ${b.name.last}`),
    },
    {
      title: 'Avatar',
      key: 'Thumbnail',
      align: 'center',
      render: (record: IUser) => (
        <>{record?.picture?.thumbnail && <Avatar src={record?.picture?.thumbnail} size={'large'} shape={'circle'} />}</>
      ),
    },
  ];

  return (
    <div>
      <Table
        size="large"
        dataSource={users}
        columns={columns}
        pagination={{
          current: pageFilter.current,
          pageSize: pageFilter.pageSize,
          onChange: (page: number, pageSize: number) => {
            setPageFilter({ ...pageFilter, current: page, pageSize: pageSize });
          },
          total: 100,
        }}
      />
    </div>
  );
};

export default UserInfo;
