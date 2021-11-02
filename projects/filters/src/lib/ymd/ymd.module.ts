import { NgModule } from '@angular/core';
import { YmdToStringPipe } from './ymd-to-string.pipe';

var pipes = [YmdToStringPipe];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes],
})
export class YmdModule {}
