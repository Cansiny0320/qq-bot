import type {Config} from 'oicq';
import {createClient} from 'oicq';
import {Helper} from './Helper';
import type {Plugin} from './types';
const pkg = require('../package.json');

export function createBot(
  account: number,
  password: string,
  groupID: number,
  config?: Config
) {
  const client = createClient(account, config);
  //监听并输入滑动验证码ticket(同一设备只需验证一次)
  client.on('system.login.slider', () => {
    process.stdin.once('data', input => {
      client.submitSlider(input as unknown as string);
    });
  });

  //监听设备锁验证(同一设备只需验证一次)
  client.on('system.login.device', () => {
    client.logger.info('验证完成后敲击Enter继续..');
    process.stdin.once('data', () => {
      client.login();
    });
  });

  client.login(password);

  const helper = new Helper(client, groupID);
  function use<T, MustNeedConfig extends true>(
    plugin: Plugin<T, MustNeedConfig>,
    config: T
  ): void;
  function use<T, MustNeedConfig extends false>(
    plugin: Plugin<T, MustNeedConfig>,
    config?: T
  ): void;
  function use<T extends never>(plugin: Plugin<T>): void;
  function use<T, MustNeedConfig extends boolean>(
    plugin: Plugin<T, MustNeedConfig>,
    config?: T
  ) {
    if (config) plugin.config = config;
    helper.plugins.push(plugin as unknown as Plugin);
  }

  client.on('system.online', () => {
    helper.plugins.forEach(plugin => plugin.install(helper, plugin.config));
    helper.sendMsg(`bot 启动成功，当前版本 ${pkg.version}`);
  });

  return {
    use,
  };
}
