import {scheduleJob} from 'node-schedule';
import type {installFn, Plugin, Helper} from '@qq-bot/core';
import {getJwzxNews} from './api';

const readedNews = new Map<string, string>();

async function JwzxNews(helper: Helper) {
  const {
    data: {data: list = []},
  } = await getJwzxNews(1);
  const result: string[] = [];
  result.push('教务在线新闻:');
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    if (!readedNews.has(e.id)) {
      readedNews.set(e.id, e.title);
      result.push(`${i + 1}. ${e.title}`);
    } else break;
  }
  result.length > 1 && helper.sendMsg(result.join('\n'));
}

const install: installFn = helper => {
  scheduleJob('0 0 * * * *', () => JwzxNews(helper));
};

export const Jwzx: Plugin = {
  name: '教务在线',
  install,
};
