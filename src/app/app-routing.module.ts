import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      './pages/home/home.module#HomePageModule'
  },
  {
    path: 'dashboard',
    loadChildren:
      './pages/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'card-details',
    loadChildren:
      './pages/card-details/card-details.module#CardDetailsPageModule'
  },
  {
    path: 'card-list',
    loadChildren:
      './pages/card-list/card-list.module#CardListPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
