import fs from 'fs';
import path from 'path';

export const obj2base64 = (obj: Record<string, any>) =>
  Buffer.from(JSON.stringify(obj)).toString('base64');

export const getConfigFileDir = (dir: string) => {
  const resolve = (config: string) => path.resolve(dir, config);
  // 最后会转译为 .js 文件
  return fs.existsSync(path.resolve(dir, './config.private.js')) ||
    fs.existsSync(path.resolve(dir, './config.private.ts'))
    ? resolve('./config.private')
    : resolve('./config.example');
};

export const defineConfig = <T>(config: T) => config;

export const dynamicImport = require;
