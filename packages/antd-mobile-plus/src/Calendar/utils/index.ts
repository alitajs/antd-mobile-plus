export function getMonthEndDay(year: number, month: number): number {
    return 32 - new Date(year, month - 1, 32).getDate();
}

export function formatMonthTitle(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}年${month}月`;
}

export function compareMonth(date1: Date, date2: Date) {
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();

    if (year1 === year2) {
        const month1 = date1.getMonth();
        const month2 = date2.getMonth();
        return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
    }

    return year1 > year2 ? 1 : -1;
}

export function compareDay(day1: Date, day2: Date) {
    const compareMonthResult = compareMonth(day1, day2);

    if (compareMonthResult === 0) {
        const date1 = day1.getDate();
        const date2 = day2.getDate();
        return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
    }

    return compareMonthResult;
}

export const cloneDate = (date: Date) => new Date(date);

export const cloneDates = (dates: Date | Date[]) =>
    Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);

export function getDayByOffset(date: Date, offset: number) {
    const cloned = cloneDate(date);
    cloned.setDate(cloned.getDate() + offset);
    return cloned;
}

export const getPrevDay = (date: Date) => getDayByOffset(date, -1);
export const getNextDay = (date: Date) => getDayByOffset(date, 1);
export const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
};

export function isNumeric(val: string | number): val is string {
    return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }

    return isNumeric(value) ? `${value}px` : String(value);
}

export function setScrollTop(el: Element | Window, value: number) {
    if ('scrollTop' in el) {
        el.scrollTop = value;
    } else {
        el.scrollTo(el.scrollX, value);
    }
}

export function getScrollTop(el: Element | Window): number {
    const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
    return Math.max(top, 0);
}

export function calcDateNum(date: [Date, Date]) {
    const day1 = date[0].getTime();
    const day2 = date[1].getTime();
    return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}
