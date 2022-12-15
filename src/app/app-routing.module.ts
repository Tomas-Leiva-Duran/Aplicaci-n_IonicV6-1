import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TablinksPageModule } from './tablinks/tablinks.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./tablinks/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./tablinks/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./tablinks/opciones/opciones.module').then(m => m.OpcionesPageModule)
  },
  {
    path: 'contenid/:id',
    loadChildren: () => import('./tablinks/contenid/contenid.module').then( m => m.ContenidPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
