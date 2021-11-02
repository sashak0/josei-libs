import { NgModule } from '@angular/core';
import { YmdModule } from 'filters/src/lib/ymd';
import { TestYmdRoutingModule } from './test-ymd-routing.module';
import { TestYmdComponent } from './test-ymd.component';

@NgModule({
  declarations: [TestYmdComponent],
  imports: [TestYmdRoutingModule, YmdModule],
})
export class TestYmdModule {}
