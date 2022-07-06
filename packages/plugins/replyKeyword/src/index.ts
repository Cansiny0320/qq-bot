import type {GroupMessageEvent} from 'oicq';
import type {Helper, installFn, Plugin} from '@qq-bot/core';
import type {Config} from './types/config';

function listener(data: GroupMessageEvent, helper: Helper, config: Config) {
  const {group_id, raw_message} = data;
  if (helper.groupID !== group_id) return;
  config.replyKeywords.forEach(async e => {
    if (e.regex.test(raw_message)) {
      helper.sendMsg(e.reply);
    }
  });
}

const install: installFn<Config, true> = (helper, config) => {
  helper.addEventListener('message.group', data =>
    listener(data, helper, config)
  );
};

export const ReplyKeyword: Plugin<Config, true> = {
  name: '关键词回复',
  install,
};
