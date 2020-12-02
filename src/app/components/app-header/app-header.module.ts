import { ToastService } from './../../service/toast.service';
import { EndpointService } from './../../service/endpoint.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from './app-header';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent],
  providers: [ToastService, EndpointService]
})
export class AppHeaderModule {}
