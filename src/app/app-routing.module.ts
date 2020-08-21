import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { LoginPage } from './components/login/login';
import { LoginModule } from './components/login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    component: LoginPage
  }
];
@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
