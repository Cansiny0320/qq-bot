import {createAxiosInstance} from '@qq-bot/common';

const {get} = createAxiosInstance(
  'https://devapi.qweather.com/v7/weather',
  {},
  {retry: true}
);

const KEY = 'b6604b9d2e8d41ba90a5c2c6ea35a3b7';

const location = '106.36,29.32';

const query = `key=${KEY}&location=${location}`;

export interface GetWeatherHoursRes {
  code: string;
  updateTime: string;
  hourly: HourlyData[];
}

export interface HourlyData {
  fxTime: string; // 预报时间
  temp: string; // 温度
  text: string; // 天气状况
}

export interface GetWeatherDaysRes {
  code: string;
  updateTime: string;
  daily: DailyData[];
}

export interface DailyData {
  fxDate: string; // 预报日期
  tempMax: string; // 最高气温
  tempMin: string; // 最低气温
  textDay: string; // 白天天气状况
  textNight: string; // 晚上天气状况
  precip: string; // 当天总降水量
}

// 完整接口文档：https://dev.qweather.com/docs/api/weather/weather-hourly-forecast/

export const getWeather24Hours = () => get<GetWeatherHoursRes>(`/24h?${query}`);

export const getWeather3Days = () => get<GetWeatherDaysRes>(`/3d?${query}`);
