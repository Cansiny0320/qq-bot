![qq-bot](https://socialify.git.ci/Cansiny0320/qq-bot/image?description=1&font=Inter&forks=1&issues=1&logo=https%3A%2F%2Fcansiny.oss-cn-shanghai.aliyuncs.com%2Fimages%2FY9G0Wv0jRY.png&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light)

## ð æä»¶

### éç¨æä»¶

- [å³é®å­åå¤](packages/plugins/replyKeyword/README.md)
- [å³é®å­æ¤å](packages/plugins/recallKeyword/README.md)
- å¤©æ°é¢æ¥ï¼æéæ¯å¦æé¨ï¼
- å¤è¯»ç¦è¨
- æ¥çç­æï¼ä¸å¯ç¨ç¶æï¼ / æ¯æ¥æ­æ¥ä¸è§éæ¥åçäºä»ä¹

### [æä¸éé®ç¸å³æä»¶](packages/plugins/handle-cqupt/README.md)

- æä¸éé®æ¯æ¥ç­¾å°
- æå¡å¨çº¿æ°é»éç¥

## å¶ä»æä»¶

- [æ¬¢è¿/å¯¹è¯](packages/plugins/greet/README.md)

## ä½¿ç¨

> é¦ååºè¯¥ç¥éçæ¯ï¼æºå¨äººä¼å ç¨ä¸ä¸ª QQ å·çä¸ä¸ªç«¯(é»è®¤ææºç«¯)

1. å®è£

   ```bash
   npm i @qq-bot/core
   ```

2. å¯å¨

   è°ç¨ createBot æ¹æ³ä¼ å¥ qq å·ãå¯ç ãqq ç¾¤å·

   ```typescript
   import {createBot} from '@cansiny0320/qq-bot';
   const bot = createBot(123456, 'password', 654321);
   ```

3. ä½¿ç¨æä»¶

   æä»¶åè¡¨å¨`packages/plugins`ç®å½ä¸ï¼ä½¿ç¨æ¹å¼ä¸ºå®è£æä»¶åä½¿ç¨`bot.use`å®è£æä»¶ï¼ä¾å¦

   ```bash
   npm i @qq-bot/plugin-greet
   ```

   ```ts
   import {Greet} from '@qq-bot/plugin-greet';

   bot.use(Greet);
   ```

   æ³¨æï¼æäºæä»¶éè¦ä¼ å¥éç½®ï¼è¯·éè¯»å¯¹åºæä»¶ README æä»¶

4. æµè¯

   å¦æºå¨äººæ­£å¸¸å¯å¨ï¼åä¼èªå¨å¨ç¾¤èåéâbot å¯å¨æåâ
