import colors from 'picocolors';

export type LogType = 'error' | 'warn' | 'info';

function output(type: LogType, msg: string) {
  const tag =
    type === 'info'
      ? colors.cyan(colors.bold(type))
      : type === 'warn'
      ? colors.yellow(colors.bold(type))
      : colors.red(colors.bold(type));
  console.log(`${colors.dim(new Date().toLocaleTimeString())} ${tag} ${msg}`);
}

export const logger = {
  info: (msg: string) => output('info', msg),
  warn: (msg: string) => output('warn', msg),
  error: (msg: string) => output('error', msg),
};
