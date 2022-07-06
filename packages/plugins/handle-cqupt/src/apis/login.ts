import type {CommonRes} from '@qq-bot/common';
import {createAxiosInstance} from '@qq-bot/common';
import {genTokenHeader} from './common';
const URL = 'https://be-prod.redrock.cqupt.edu.cn/magipoke';
const headers = {
  'content-type': 'application/json',
};
const {post} = createAxiosInstance(URL, headers);

export interface TokenReq {
  idNum: string;
  stuNum: string;
}

export interface TokenData {
  token: string;
  refresh_token: string;
}

export interface GetUserInfoResData {
  uid: number;
  redid: string;
  stunum: string;
  photo_src: string;
  nickname: string;
  introduction: string;
  phone: string;
  qq: string;
  gender: string;
  birthday: string;
  background_url: string;
  identityies: void[];
  constellation: string;
  grade: string;
  college: string;
  is_self: boolean;
  isFocus: boolean;
  isBefocused: boolean;
  photo_thumbnail_src: string;
  username: string;
}

export const getToken = async (info: TokenReq) => {
  const {
    data: {data},
  } = await post<CommonRes<TokenData>>('/token', info);
  const {token} = data;
  return token;
};

export const getUserInfo = async (token: string) =>
  post<CommonRes<GetUserInfoResData>>(
    '/Person/Search',
    {},
    {headers: {...genTokenHeader(token)}}
  );
