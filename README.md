![qq-bot](https://socialify.git.ci/Cansiny0320/qq-bot/image?description=1&font=Inter&forks=1&issues=1&logo=https%3A%2F%2Fcansiny.oss-cn-shanghai.aliyuncs.com%2Fimages%2FY9G0Wv0jRY.png&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light)

## 🎉 插件

### 通用插件

- [关键字回复](packages/plugins/replyKeyword/README.md)
- [关键字撤回](packages/plugins/recallKeyword/README.md)
- 天气预报（提醒是否有雨）
- 复读禁言
- 查看热搜（不可用状态） / 每日播报一觉醒来发生了什么

### [掌上重邮相关插件](packages/plugins/handle-cqupt/README.md)

- 掌上重邮每日签到
- 教务在线新闻通知

## 其他插件

- [欢迎/对话](packages/plugins/greet/README.md)

## 使用

> 首先应该知道的是，机器人会占用一个 QQ 号的一个端(默认手机端)

1. 安装

   ```bash
   npm i @qq-bot/core
   ```

2. 启动

   调用 createBot 方法传入 qq 号、密码、qq 群号

   ```typescript
   import {createBot} from '@cansiny0320/qq-bot';
   const bot = createBot(123456, 'password', 654321);
   ```

3. 使用插件

   插件列表在`packages/plugins`目录下，使用方式为安装插件后使用`bot.use`安装插件，例如

   ```bash
   npm i @qq-bot/plugin-greet
   ```

   ```ts
   import {Greet} from '@qq-bot/plugin-greet';

   bot.use(Greet);
   ```

   注意：某些插件需要传入配置，请阅读对应插件 README 文件

4. 测试

   如机器人正常启动，则会自动在群聊发送“bot 启动成功”
