import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { YmdModule } from 'filters/src/lib/ymd';
import { YmdDatepickerComponent } from './ymd-datepicker.component';

var formModules = [ReactiveFormsModule];

var matModules = [
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
];

@NgModule({
  declarations: [YmdDatepickerComponent],
  imports: [...formModules, ...matModules, YmdModule],
  exports: [YmdDatepickerComponent],
})
export class YmdDatepickerModule {}
