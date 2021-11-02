import { Pipe, PipeTransform } from '@angular/core';
import { YearMonthDate } from './ymd';
import { YmdService } from './ymd.service';

/**
 * Needs YmdService provided
 */
@Pipe({
  name: 'ymdToString',
})
export class YmdToStringPipe implements PipeTransform {
  constructor(private service: YmdService) {}

  transform(ymd?: YearMonthDate): string {
    return this.service.ymdToPrettyString(ymd);
  }
}
