import { ToastService } from '../../service/toast.service';
import { NgxMaskModule } from 'ngx-mask';
import { CardDetailsPage } from './card-details.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Chart } from 'chart.js';

const routes: Routes = [
  {
    path: '',
    component: CardDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    // Chart,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [ToastService],
  declarations: [CardDetailsPage]
})
export class CardDetailsPageModule {}
