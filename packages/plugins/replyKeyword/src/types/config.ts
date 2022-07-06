import type {Sendable} from 'oicq';

export interface Config {
  replyKeywords: Readonly<{
    regex: RegExp;
    reply: Sendable;
  }>[];
}
