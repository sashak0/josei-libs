import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { YearMonth, YearMonthDate, ymdFilterFormat } from './ymd';

@Injectable()
export class YmdService {
  constructor() {}

  private locale: string = 'en-us';

  setLocale(locale: string): void {
    this.locale = locale;
  }

  ymdToDate(ymd?: YearMonthDate): Date | undefined {
    if (ymd == null) return undefined;
    if (ymd instanceof Date) return ymd;

    const ym = <YearMonth>ymd;
    const date = new Date(0);
    date.setFullYear(ymd.year);
    if (ymd.month) date.setMonth(ymd.month - 1);

    return date;
  }

  ymdToFilterString(ymd?: YearMonthDate): string {
    if (ymd == null) return '';
    if (ymd instanceof Date) {
      const date = <Date>ymd;
      return formatDate(date, ymdFilterFormat, this.locale);
    }

    return JSON.stringify(ymd);
  }

  ymdToPrettyString(ymd?: YearMonthDate): string {
    if (ymd == null) return '';
    if (ymd instanceof Date) {
      return ymd.toLocaleDateString(this.locale);
    }

    if (ymd.month) {
      const date = new Date(0);
      date.setFullYear(ymd.year);
      date.setMonth(ymd.month - 1);
      return date.toLocaleDateString(this.locale, {
        year: 'numeric',
        month: 'long',
      });
    }
    return ymd.year + '';
  }
}
