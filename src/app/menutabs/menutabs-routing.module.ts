import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenutabsPage } from './menutabs.page';

const routes: Routes = [
  {
    path: '',
    component: MenutabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenutabsPageRoutingModule {}
