import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultTemplate } from 'src/app/templates/admin/default/default.template';


const routes: Routes = [
  {
    path: '',
    component: DefaultTemplate,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
