import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultTemplate } from 'src/app/templates/admin/default/default.template';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationTemplate } from 'src/app/templates/admin/authentication/authentication.template';
import { LoginPage } from 'src/app/pages/admin/login/login.page';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';


const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationTemplate,
    children: [
      {
        path: 'login',
        component: LoginPage
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: DefaultTemplate,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
