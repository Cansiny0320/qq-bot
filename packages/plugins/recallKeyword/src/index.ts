import type {GroupMessageEvent} from 'oicq';
import type {Helper, installFn, Plugin} from '@qq-bot/core';
import type {Config} from './config';

function listener(
  data: GroupMessageEvent,
  helper: Helper,
  recallKeywords: Config
) {
  const {group_id, raw_message, message_id} = data;
  if (helper.groupID !== group_id) return;
  if (recallKeywords.some(regex => regex.test(raw_message))) {
    helper.deleteMsg(message_id);
  }
}

const install: installFn<Config, true> = (helper, recallKeywords) => {
  helper.addEventListener('message.group', data =>
    listener(data, helper, recallKeywords)
  );
};

export const RecallKeyword: Plugin<Config, true> = {
  name: '关键词撤回',
  install,
};
