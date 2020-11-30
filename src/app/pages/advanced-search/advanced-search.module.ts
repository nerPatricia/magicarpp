import { EndpointService } from './../../service/endpoint.service';
import { LoadingService } from './../../service/loading.service';
import { ToastService } from '../../service/toast.service';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavParams } from '@ionic/angular';
import { AdvancedSearchPage } from './advanced-search.page';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

const routes: Routes = [
  {
    path: '',
    component: AdvancedSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    RouterModule.forChild(routes),
    NgxMaskModule.forRoot(),
    NgxCurrencyModule
  ],
  declarations: [AdvancedSearchPage],
  providers: [LoadingService, ToastService, EndpointService, NavParams]
})
export class AdvancedSearchPageModule {}
