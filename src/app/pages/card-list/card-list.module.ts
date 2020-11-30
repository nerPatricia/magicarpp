import { AdvancedSearchPageModule } from './../advanced-search/advanced-search.module';
import { LoadingService } from './../../service/loading.service';
import { ToastService } from '../../service/toast.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardListPage } from './card-list.page';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CardListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardListPage],
  providers: [ToastService, LoadingService]
})
export class CardListPageModule {}
