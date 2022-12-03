import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPageRoutingModule } from './Notificaciones-routing.module';

import { NotificacionesPage } from './Notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
