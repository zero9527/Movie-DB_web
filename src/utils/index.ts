import { getMovieTop250 } from '@/api/movie';
export interface IDateFormateParams {
  timeStamp: number,
  splitChar?: string // 日期分隔符
}

// 时间格式化
export function dateFormate({ timeStamp, splitChar='-' }: IDateFormateParams) {
  const time: Date = new Date(timeStamp);

  const Y = time.getFullYear();
  const M = (time.getMonth() + 1 + '').padStart(2, '0');
  const D = (time.getDate() + '').padStart(2, '0');
  const h = (time.getHours() + '').padStart(2, '0');
  const m = (time.getMinutes() + '').padStart(2, '0');
  const s = (time.getSeconds() + '').padStart(2, '0');

  return `${Y}${splitChar}${M}${splitChar}${D} ${h}:${m}:${s}`;
}

export const phoneRegx = /^1(3|5|6|7|8)\d{9}$/;

// 获取Top250全部电影，搜索列表用（搜索接口失效了。。。）
export function getMovieTop250All(callback = (cache: any) => {}) {
  function getDataList(start: number) {
    return getMovieTop250({
      start,
      count: 100
    });
  }

  return Promise.all([
    getDataList(0),
    getDataList(100),
    getDataList(200),
  ]).then(([res1, res2, res3]: any) => {
    let cache = localStorage.getItem('movieTop250All');
    if (cache && cache.length > 0) {
      if (callback) callback(cache);
      return;
    }
    let movieTop250All = [
      ...res1.subjects,
      ...res2.subjects,
      ...res3.subjects,
    ];
    localStorage.setItem('movieTop250All', JSON.stringify(movieTop250All));
    if (callback) callback(movieTop250All);
  });
}

export function getUrlParams() {
  if (!location.hash.includes('?')) return;

  let search = location.hash.split('?')[1];
  let res = {};
  
  if (!search.includes('&')) return {
    [search.split('=')[0]]: search.split('=')[1]
  };

  res = search.split('&').map(item => {
    return {
      [item.split('=')[0]]: item.split('=')[1]
    }
  });
  return res;
}
