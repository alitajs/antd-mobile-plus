const langOptions = {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `最多选择 ${maxRange} 天`,
}

export const lang = (t: string, tip?: unknown) => {
    const l = typeof langOptions[t] === 'function' ? langOptions[t](tip) : langOptions[t];
    return l;
}