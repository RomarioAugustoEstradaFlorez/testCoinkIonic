import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'number',
        loadChildren: () => import('./number/number.module').then(m => m.NumberPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'security',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityPageModule)
      },
      {
        path: 'authorization',
        loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/number',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/number',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
