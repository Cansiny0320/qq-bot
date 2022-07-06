import {scheduleJob} from 'node-schedule';
import type {GroupMessageEvent} from 'oicq';
import type {Helper, installFn, Plugin} from '@qq-bot/core';
import {getWeiboHotNews, getWhatHappenedToTheWorld} from './api';

async function listener(data: GroupMessageEvent, helper: Helper) {
  const {group_id, raw_message} = data;
  if (helper.groupID !== group_id) return;
  if (raw_message === '热搜') {
    helper.sendMsg(await getWeiboHotNews());
  }
}

async function whatHappenedToTheWorld(helper: Helper) {
  helper.sendMsg(await getWhatHappenedToTheWorld());
}

const install: installFn = helper => {
  helper.addEventListener('message.group', data => listener(data, helper));
  scheduleJob('0 0 8 * * *', () => whatHappenedToTheWorld(helper));
};

export const News: Plugin = {
  name: '新闻',
  install,
};
