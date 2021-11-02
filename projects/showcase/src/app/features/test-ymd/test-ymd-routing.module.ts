import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestYmdComponent } from './test-ymd.component';

const routes: Routes = [{ path: '', component: TestYmdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestYmdRoutingModule { }
