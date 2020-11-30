import { ToastService } from '../../service/toast.service';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdvancedSearchPage } from './advanced-search.page';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [AdvancedSearchPage],
  providers: [ToastService]
})
export class AdvancedSearchPageModule {}
