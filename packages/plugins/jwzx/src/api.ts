import {createAxiosInstance} from '@qq-bot/common';
import type {CommonRes} from '@qq-bot/common';

const baseURL = 'https://be-prod.redrock.cqupt.edu.cn/magipoke-jwzx';

const headers = {
  'content-type': 'application/json',
};

export interface JwzxNewsDataItem {
  id: string;
  title: string;
  date: string;
  read_count: string;
}

const {get} = createAxiosInstance(baseURL, headers);

export const getJwzxNews = (page: number) =>
  get<CommonRes<JwzxNewsDataItem[]>>('/jwNews/list?page=1', {page});
