
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children:[
      {
        path: 'inicio',
        loadChildren:() => import('./inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'explorar',
        loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
      },
      {
        path: 'Notificaciones',
        loadChildren: () => import('./notificaciones/Notificaciones.module').then( m => m.NotificacionesPageModule)
      },
      {
        path: 'opciones',
        loadChildren: () => import('./opciones/opciones.module').then(m => m.OpcionesPageModule)
      },
      {
        path: 'camara',
        loadChildren: () => import('../camara/camara.module').then(m => m.CamaraPageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioPageModule)
      },
      {
        path: 'geolocalizacion',
        loadChildren: () => import('../geolocalizacion/geolocalizacion.module').then(m => m.GeolocalizacionPageModule)
      },
      {
        path: '',
        redirectTo:'/tablinks/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tablinks/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
