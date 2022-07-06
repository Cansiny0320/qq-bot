![qq-bot](<https://socialify.git.ci/Cansiny0320/qq-bot/image?description=1&descriptionEditable=%F0%9F%A4%96%20%E4%B8%80%E6%AC%BE%E6%8F%92%E4%BB%B6%E5%8C%96%E7%9A%84%20qq%20%E7%BE%A4%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E4%B8%BB%E8%A6%81%E7%94%A8%E4%BA%8E%E9%87%8D%E5%BA%86%E9%82%AE%E7%94%B5%E5%A4%A7%E5%AD%A6(CQUPT)&font=Inter&logo=https%3A%2F%2Fcansiny.oss-cn-shanghai.aliyuncs.com%2Fimages%2F%25E6%259C%25BA%25E5%2599%25A8%25E4%25BA%25BA.png&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Light>)

## 🎉 插件

### 通用插件

- 关键字回复
  - 吃什么/什么没吃过
  - 二维码
- 关键字撤回
- 天气预报（提醒是否有雨）
- 复读禁言
- 查看热搜（不可用状态） / 每日播报一觉醒来发生了什么

### 掌上重邮相关插件

- 掌上重邮每日签到
- 教务在线新闻通知

## 其他插件

- b 站动态抓取

## 使用

> 首先应该知道的是，机器人会占用一个 QQ 号

1. 安装

   ```bash
   npm i @qq-bot/core
   ```

2. 启动

   调用 createBot 方法传入 qq 号、密码、qq 群号

   ```typescript
   import { createBot } from '@cansiny0320/qq-bot'
   const bot = createBot(123456, 'password', 654321)
   ```

3. 使用插件

   插件列表在`packages/plugins`目录下，使用方式为安装插件后使用`bot.use`安装插件，例如

   ```bash
   npm i @qq-bot/plugin-greet
   ```

   ```ts
   import { Greet } from '@qq-bot/plugin-greet'

   bot.use(Greet)
   ```

   注意：某些插件需要传入配置，请阅读对应插件 README 文件

4. 测试

   如机器人正常启动，则会自动在群聊发送“bot 启动成功”

## TODO

- [ ] 增加查询插件帮助文档的功能，例如 help 掌上重邮
- [ ] 增加查看已启用插件的功能
- [ ] 修复微博热搜功能
- [ ] 考虑使用本地文件方式存储已通知过的教务在线新闻
- [ ] 优化天气预报功能
- [ ] 课表功能（似乎不太需要）
