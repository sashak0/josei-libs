export interface YearMonth {
  year: number;
  month?: number;
}

export type YearMonthDate = YearMonth | Date;

export const ymdFilterFormat: string = 'yyyy/MM/dd';
