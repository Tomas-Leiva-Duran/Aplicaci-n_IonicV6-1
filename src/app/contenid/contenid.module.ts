import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidPageRoutingModule } from './contenid-routing.module';

import { ContenidPage } from './contenid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidPageRoutingModule
  ],
  declarations: [ContenidPage]
})
export class ContenidPageModule {}
