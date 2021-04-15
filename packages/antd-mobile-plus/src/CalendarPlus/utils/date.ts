/**
 * 获取某个时间月份的总天数
 * @param date 某个月份的date
 */
export const totalDaysWithDate = (originDate = new Date()) => {
  const date = new Date(originDate.valueOf());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const d = new Date(year, month, 0);
  return d.getDate();
};

/**
 * 获取某个时间月份开始日是周几
 * @param date 某个月份的date
 */
export const startDayWeekWithDate = (originDate = new Date()) => {
  const date = new Date(originDate.valueOf());
  date.setDate(1);
  return date.getDay();
};

/**
 * 获取某个时间月份结束日是周几
 * @param date 某个月份的date
 */
export const endDayWeekWithDate = (originDate = new Date()) => {
  const date = new Date(originDate.valueOf());
  date.setDate(startDayWeekWithDate(date));
  return date.getDay();
};

/**
 * 获取当前月份的时间数组对象
 * @param date 某个月份的date
 */
export const daysOfMonth = (originDate = new Date()) => {
  const date = new Date(originDate.valueOf());
  const totalDays = totalDaysWithDate(date);
  const currentSpaceNum = startDayWeekWithDate(date);
  const month = date.getMonth();

  const preMonthDate = new Date(date);
  preMonthDate.setMonth(month - 1);
  const preMonthTotalDays = totalDaysWithDate(preMonthDate);
  const resultArr = [];

  for (
    let index = preMonthTotalDays - currentSpaceNum;
    index < preMonthTotalDays;
    index++
  ) {
    preMonthDate.setDate(index + 1);
    resultArr.push({
      day: index + 1,
      type: 'disable',
      date: new Date(preMonthDate),
    });
  }

  date.setMonth(month);
  for (let index = 0; index < totalDays; index++) {
    date.setDate(index + 1);
    resultArr.push({
      day: index + 1,
      type: 'nomal',
      date: new Date(date),
    });
  }
  const length = resultArr.length;
  const sur = Math.ceil(length / 7) * 7;
  date.setMonth(month + 1);
  for (let index = 0; index < sur - length; index++) {
    date.setDate(index + 1);
    resultArr.push({
      day: index + 1,
      type: 'disable',
      date: new Date(date),
    });
  }

  return resultArr;
};

/**
 * 时间格式化
 * @param date date
 * @param format 时间格式，例如：yyyy-MM-dd
 */
export const formatDate = (date: Date, format: string) => {
  let o: { [key: string]: any } = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  return format;
};

/**
 * 获取下一月的日期
 * @param currentDate
 */
export const nextMonthDate = (currentDate: Date): Date => {
  const date = new Date(currentDate);
  const month = date.getMonth() + 1;
  date.setMonth(month);
  return date;
};

/**
 * 获取上一月的日期
 * @param currentDate
 */
export const preMonthDate = (currentDate: Date): Date => {
  const date = new Date(currentDate.valueOf());
  const month = date.getMonth() - 1;
  date.setMonth(month);
  return date;
};

/**
 * 获取下一年的日期
 * @param currentDate
 */
export const nextYearDate = (currentDate: Date): Date => {
  const date = new Date(currentDate.valueOf());
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  date.setFullYear(fullYear + 1);
  return date;
};

/**
 * 获取上一年的日期
 * @param currentDate
 */
export const preYearDate = (currentDate: Date): Date => {
  const date = new Date(currentDate.valueOf());
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  date.setFullYear(fullYear - 1);
  return date;
};
