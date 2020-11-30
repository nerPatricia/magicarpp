import { EndpointService } from './../../service/endpoint.service';
import { AdvancedSearchPageModule } from './../advanced-search/advanced-search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from './../../service/toast.service';
import { LoadingService } from './../../service/loading.service';
import { AdvancedSearchPage } from './../advanced-search/advanced-search.page';
import { AppRankListModule } from './../../components/app-rank-list/app-rank-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    AppRankListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  providers: [LoadingService, ToastService, EndpointService]
})
export class HomePageModule {}
