import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ymd',
    loadChildren: () =>
      import('./features/test-ymd/test-ymd.module').then(
        (m) => m.TestYmdModule
      ),
  },
  {
    path: 'ymd-datepicker',
    loadChildren: () =>
      import('./features/test-ymd-datepicker/test-ymd-datepicker.module').then(
        (m) => m.TestYmdDatepickerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
