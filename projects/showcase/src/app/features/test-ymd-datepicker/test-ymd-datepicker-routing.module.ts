import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestYmdDatepickerComponent } from './test-ymd-datepicker.component';

const routes: Routes = [{ path: '', component: TestYmdDatepickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestYmdDatepickerRoutingModule { }
