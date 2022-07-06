import type {GroupMessageEvent} from 'oicq';
import type {Helper, installFn, Plugin} from '@qq-bot/core';
import type {Config} from './types/config';

let config: Config | undefined;

function talk(data: GroupMessageEvent, helper: Helper) {
  const {
    raw_message,
    sender: {user_id},
  } = data;
  if (/\S*机器人\S*/.test(raw_message)) {
    if (config && Object.keys(config.reply).includes(String(user_id))) {
      helper.sendMsg(
        config.reply[user_id][
          Math.floor(Math.random() * config.reply[user_id].length)
        ]
      );
    } else {
      helper.sendMsg('你才是机器人');
    }
  }
}

const install: installFn<Config, false> = (helper, _config) => {
  config = _config;
  helper.addEventListener('message.group', data => {
    const {group_id} = data;
    if (group_id !== helper.groupID) return;
    talk(data, helper);
  });
};

export const Greet: Plugin<Config, false> = {
  name: '对话交互',
  install,
};

export {Config};
