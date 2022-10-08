export interface IUser {
  name: IUserName;
  login: IUserIdentity;
  picture: IUserThumbnail;
}

export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserThumbnail {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUserIdentity {
  username: string;
  uuid: string;
}