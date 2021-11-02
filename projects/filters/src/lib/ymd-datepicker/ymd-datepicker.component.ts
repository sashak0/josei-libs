import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { YearMonthDate } from 'filters/src/lib/ymd';

@Component({
  selector: 'josei-ymd-datepicker',
  templateUrl: './ymd-datepicker.component.html',
  styleUrls: ['./ymd-datepicker.component.scss'],
})
export class YmdDatepickerComponent implements OnChanges {
  @Input() touchUi: boolean = false;
  @Input() applyLabel: string = 'Apply';
  @Input() cancelLabel: string = 'Cancel';
  @Input() yearMonthDate?: YearMonthDate;
  @Output() yearMonthDateChange: EventEmitter<YearMonthDate> =
    new EventEmitter();

  formControl = new FormControl(undefined);
  formYearMonthDate?: YearMonthDate;

  constructor() {}

  ngOnChanges(): void {
    if (this.yearMonthDate && this.yearMonthDate instanceof Date)
      this.formControl.setValue(this.yearMonthDate);
    else this.formControl.setValue(undefined);
  }

  chosenYearHandler(date: Date): void {
    this.formYearMonthDate = {
      year: date.getFullYear(),
    };
  }

  chosenMonthHandler(date: Date): void {
    this.formYearMonthDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    };
  }

  chosenDayHandler(): void {
    if (this.formControl.value) this.formYearMonthDate = this.formControl.value;
    this.yearMonthDateChange.emit(this.formYearMonthDate);
  }

  cancel(): void {
    this.formYearMonthDate = undefined;
  }
}
