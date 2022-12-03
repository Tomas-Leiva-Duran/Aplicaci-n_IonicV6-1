import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidPage } from './contenid.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidPageRoutingModule {}
