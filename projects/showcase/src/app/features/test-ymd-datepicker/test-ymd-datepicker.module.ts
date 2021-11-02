import { NgModule } from '@angular/core';
import { YmdModule } from 'filters/src/lib/ymd';
import { YmdDatepickerModule } from 'filters/src/lib/ymd-datepicker';
import { SharedModule } from '../../shared/shared.module';
import { TestYmdDatepickerRoutingModule } from './test-ymd-datepicker-routing.module';
import { TestYmdDatepickerComponent } from './test-ymd-datepicker.component';

@NgModule({
  declarations: [TestYmdDatepickerComponent],
  imports: [
    SharedModule,
    TestYmdDatepickerRoutingModule,
    YmdModule,
    YmdDatepickerModule,
  ],
})
export class TestYmdDatepickerModule {}
