import type {GroupMessageEvent} from 'oicq';
import type {installFn, Plugin, Helper} from '@qq-bot/core';

let recentMessages: GroupMessageEvent[] = [];
const canRepeatTimes = 5;
const banTimeLimit = 5;
function banForRepeat(helper: Helper) {
  recentMessages = recentMessages.map(e => {
    if (e.raw_message.startsWith('[CQ:')) {
      e.raw_message = e.raw_message.split(',')[1];
    }
    return e;
  });
  const raw = recentMessages[0].raw_message;
  if (recentMessages.every(e => e.raw_message === raw)) {
    const banTime = Math.ceil(Math.random() * banTimeLimit) * 60;
    helper.banMember(
      recentMessages[recentMessages.length - 1].sender.user_id,
      banTime
    );
  }
}

function listener(data: GroupMessageEvent, helper: Helper) {
  recentMessages.push(data);

  if (recentMessages.length > canRepeatTimes) {
    recentMessages.shift();
    banForRepeat(helper);
  }
}

const install: installFn = helper => {
  helper.addEventListener('message.group', data => listener(data, helper));
};

export const Ban4Repeat: Plugin = {
  name: '复读禁言',
  install,
};
