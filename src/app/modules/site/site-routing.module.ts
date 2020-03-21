import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultTemplate } from 'src/app/templates/site/default/default.template';


const routes: Routes = [
  {
    path: '',
    component: DefaultTemplate,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
