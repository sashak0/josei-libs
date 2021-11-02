import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YearMonthDate, YmdService } from 'filters/src/lib/ymd';

@Component({
  selector: 'app-test-ymd-datepicker',
  templateUrl: './test-ymd-datepicker.component.html',
  styleUrls: ['./test-ymd-datepicker.component.scss'],
})
export class TestYmdDatepickerComponent implements OnInit {
  yearMonthDate: YearMonthDate = { year: 2019 };

  // todo input year-month range
  dates: Date[] = [];

  dateRangeFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private ymdService: YmdService) {
    this.ymdService.setLocale('fr-be');

    this.dateRangeFormGroup = this.fb.group({
      from: new Date(),
      to: new Date(),
    });

    console.log(this.dateRangeFormGroup.getRawValue());
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}
