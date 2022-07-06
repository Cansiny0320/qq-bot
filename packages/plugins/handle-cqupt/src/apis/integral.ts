import {stringify} from 'qs';
import type {CommonRes} from '@qq-bot/common';
import {createAxiosInstance} from '@qq-bot/common';

import {genTokenHeader} from './common';

const URL = 'https://be-prod.redrock.cqupt.edu.cn/magipoke-intergral';

const {post, get} = createAxiosInstance(URL);

export interface GetInfoResData {
  task: TaskItem[];
  shop: ShopItem[];
  user_amount: number;
  un_got_good: boolean;
}

export interface TaskItem {
  title: string;
  max_progress: number;
  current_progress: number;
  description: string;
  type: string;
  gain_stamp: number;
}

export interface ShopItem {
  id: number;
  title: string;
  url: string;
  amount: number;
  price: number;
  type: number;
  is_purchased: boolean;
}

export const getInfo = async (token: string) =>
  get<CommonRes<GetInfoResData>>('/User/info', null, {
    headers: {...genTokenHeader(token)},
  });

// 完成任务
export const progressTask = async (title: string, token: string) =>
  post<CommonRes<GetInfoResData>>(
    `/Integral/progress?timestamp=${Date.now()}`,
    stringify({title}),
    {
      headers: {
        ...genTokenHeader(token),
        'content-type': 'application/x-www-form-urlencoded',
      },
    }
  );
