import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioPage } from '../usuario/usuario.page';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'usuario',
    loadChildren: () => import('src/app/tablinks/usuario/usuario.module').then(m => m.UsuarioPageModule)
  },
  {
    path: 'contenid/:id',
    loadChildren: () => import('src/app/tablinks/contenid/contenid.module').then( m => m.ContenidPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
