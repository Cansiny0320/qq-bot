import dayjs from 'dayjs';
import {expect, test} from 'vitest';
import {
  getNowTimestamp,
  getNowTimeString,
  getTimeStringDiffHour,
  getTodayDate,
  getTodayLastTimeString,
} from '../src/datedate';

test('getTodayDate', () => {
  expect(getTodayDate()).eq(
    new Date()
      .toLocaleDateString('zh-CN')
      .split('/')
      .map(e => e.padStart(2, '0'))
      .join('-')
  );
});

test('getNowTimestamp', () => {
  expect(getNowTimestamp()).eq(Math.floor(+new Date() / 1000));
});

test('getNowTimeString', () => {
  // example 2022-02-27 00:39:00
  const timeStringReg =
    /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  expect(timeStringReg.test(getNowTimeString())).toBeTruthy();
});

test('getTodayLastTimeString', () => {
  expect(getTodayLastTimeString()).eq(`${getTodayDate()} 23:59:59`);
});

test('getTimeStringFromHour', () => {
  const diffHour = 3;
  const date1 = dayjs(getTimeStringDiffHour(diffHour));
  expect(date1.diff(getNowTimeString(), 'h')).eq(diffHour);
});
